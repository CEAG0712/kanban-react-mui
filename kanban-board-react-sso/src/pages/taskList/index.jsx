import React, { useEffect, useState } from "react";
import { DragDropContext, Draggable, Droppable } from "@hello-pangea/dnd";
import { useParams, useNavigate } from "react-router-dom";
import {
  Box,
  Card,
  CardContent,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Breadcrumbs,
  Link,
  Modal,
  FormControl,
  Select,
  InputLabel,
} from "@mui/material";
import {
  MoreVert,
  AddCircleOutline as AddIcon,
  ArrowBack,
} from "@mui/icons-material";
import CustomButton from "../../components/CustomButton";
import { notify } from "../../utils";
import { taskListService } from "../../services/taskListService";
import CustomModal from "../../components/CustomModal";
import CustomBreadcrumbs from "../../components/CustomBreadcrumbs";

function TaskList() {
  const params = useParams();
  const navigate = useNavigate();
  const [tasks, setTasks] = useState({});
  const [taskData, setTaskData] = useState({
    _id: "",
    taskSummary: "",
    acceptanceCriteria: "",
    status: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [refresh, setRefresh] = useState(false);
  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [updateModalOpen, setUpdateModalOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [projectInfo, setProjectInfo] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const res = await taskListService.getAlltasks(params.id);
        const backData = res.data.data.board;
        delete backData._id;
        delete backData.userId;
        delete backData.__v;
        setTasks(backData);
        setProjectInfo(res.data.data.projectInfo);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [refresh, params.id]);

  const onChange = (event) => {
    setTaskData({
      ...taskData,
      [event.target.name]: event.target.value,
    });
  };

  // Menu handlers
  const handleMenuClick = (event, task) => {
    setAnchorEl(event.currentTarget);
    setSelectedTask(task);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedTask(null);
  };

  // Modal handlers
  const handleOpenCreateModal = () => setCreateModalOpen(true);
  const handleCloseCreateModal = () => {
    setCreateModalOpen(false);
    setTaskData({
      _id: "",
      taskSummary: "",
      acceptanceCriteria: "",
      status: "",
    });
  };

  const handleOpenUpdateModal = (task) => {
    setTaskData(task);
    setUpdateModalOpen(true);
    handleMenuClose();
  };

  const handleCloseUpdateModal = () => {
    setUpdateModalOpen(false);
    setTaskData({
      _id: "",
      taskSummary: "",
      acceptanceCriteria: "",
      status: "",
    });
  };

  const onSubmitCreateTask = async (event) => {
    event.preventDefault();
    setError("");

    if (!taskData.taskSummary) {
      notify.error("Task Summary is a required field");
      return;
    }

    let status = taskData.status || "todo";

    try {
      setLoading(true);
      delete taskData._id;
      await taskListService.createTask({ ...taskData, status }, params.id);
      notify.success("New task created");
      setRefresh(!refresh);
      handleCloseCreateModal();
    } catch (error) {
      notify.error(error.response?.data?.message || "Unable to create task");
      setError(error.response?.data?.message || "Unable to create task");
    } finally {
      setLoading(false);
    }
  };

  const onUpdateSubmit = async (event) => {
    event.preventDefault();
    setError("");

    if (!taskData.taskSummary) {
      notify.error("Task Summary is a required field");
      return;
    }

    try {
      setLoading(true);
      await taskListService.updateTask(
        taskData._id,
        taskData.status,
        taskData,
        params.id
      );
      notify.success("Task Updated");
      setRefresh(!refresh);
      handleCloseUpdateModal();
    } catch (error) {
      notify.error(error.response?.data?.message || "Unable to update task");
      setError(error.response?.data?.message || "Unable to update task");
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteClick = () => {
    setDeleteDialogOpen(true);
  };

  const handleDeleteConfirm = async () => {
    try {
      await taskListService.deleteTask(
        selectedTask._id,
        selectedTask.status,
        params.id
      );
      setRefresh(!refresh);
      setDeleteDialogOpen(false);
    } catch (error) {
      console.log(error);

      notify.error("Unable to delete the task at this time");
    } finally {
      handleMenuClose();
    }
  };

  const handleOnDragEnd = async (result) => {
    if (!result.destination) return;

    const { source, destination } = result;
    const taskData = { ...tasks };

    if (source.droppableId === destination.droppableId) {
      const task = taskData[source.droppableId];
      const items = Array.from(task.tasks);
      const [reOrderItem] = items.splice(source.index, 1);
      items.splice(destination.index, 0, reOrderItem);
      taskData[source.droppableId] = {
        ...task,
        tasks: items,
      };
    } else {
      const sourceTask = taskData[source.droppableId];
      const desTask = taskData[destination.droppableId];
      const sourceItems = Array.from(sourceTask.tasks);
      const desItems = Array.from(desTask.tasks);
      const [movedItem] = sourceItems.splice(source.index, 1);
      desItems.splice(destination.index, 0, movedItem);
      taskData[source.droppableId] = {
        ...sourceTask,
        tasks: sourceItems,
      };
      taskData[destination.droppableId] = {
        ...desTask,
        tasks: desItems,
      };
    }

    setTasks(taskData);

    try {
      await taskListService.taskBulkUpdateDragAndDrop(
        {
          sourceColumn: source.droppableId,
          destColumn: destination.droppableId,
          sourceIndex: source.index,
          destIndex: destination.index,
        },
        params.id
      );
      setRefresh(!refresh);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box sx={{ padding: "37px" }}>
      {/* Header Section */}
      <CustomBreadcrumbs />
      <Box
        sx={{
          backgroundColor: "white",
          p: 3,
          borderRadius: 2,
          boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
          mb: 3,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: { xs: "flex-start", md: "center" },
            justifyContent: "space-between",
            gap: 2,
          }}
        >
          <Box>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 600,
                color: "text.primary",
                mb: 0.5,
              }}
            >
              {projectInfo.projectName}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {projectInfo.projectDescription}
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 3,
            }}
          >
            <Box>
              <Typography variant="h6" color="primary">
                {tasks?.todo?.tasks?.length ?? 0}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                To Do
              </Typography>
            </Box>

            <Box>
              <Typography variant="h6" color="warning.main">
                {tasks?.inProgress?.tasks?.length ?? 0}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                In Progress
              </Typography>
            </Box>

            <Box>
              <Typography variant="h6" color="success.main">
                {tasks?.done?.tasks?.length ?? 0}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Completed
              </Typography>
            </Box>

            <Box>
              <Typography variant="h6">
                {Object.values(tasks).reduce(
                  (acc, curr) => acc + curr.tasks.length,
                  0
                )}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Total Tasks
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Action Bar */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          mb: 4,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: "center",
            width: { xs: "100%", sm: "auto" },
          }}
        >
          <TextField
            variant="outlined"
            placeholder="Search tasks..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            sx={{
              mr: { sm: 2 },
              mb: { xs: 2, sm: 0 },
              width: { xs: "100%", sm: "auto" },
            }}
          />
          <CustomButton
            label="Create Task"
            onClick={handleOpenCreateModal}
            startIcon={<AddIcon />}
            sx={{
              width: { xs: "100%", sm: "auto" },
              mb: { xs: 2, sm: 0 },
            }}
          />
        </Box>
        <CustomButton
          label="Go Back"
          onClick={() => navigate("/projects")}
          startIcon={<ArrowBack />}
          variant="outlined"
          sx={{
            width: { xs: "100%", sm: "auto" },
          }}
        />
      </Box>

      {/* Task Board */}
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(3, 1fr)",
            },
            gap: 2,
            width: "100%",
          }}
        >
          {Object.entries(tasks).map(([taskId, task]) => (
            <Box key={taskId}>
              <Card
                sx={{
                  backgroundColor: "#f0efed",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
                  height: "100%",
                }}
              >
                <CardContent>
                  <Typography variant="h6" gutterBottom sx={{ mb: 2 }}>
                    {task.title} ({task.tasks.length})
                  </Typography>
                  <Droppable droppableId={taskId}>
                    {(provided) => (
                      <Box
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        sx={{ minHeight: 100 }}
                      >
                        {task.tasks.map((t, index) => (
                          <Draggable
                            key={t._id}
                            draggableId={t._id}
                            index={index}
                          >
                            {(provided) => (
                              <Card
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                sx={{
                                  mb: 2,
                                  backgroundColor: "white",
                                  "&:hover": {
                                    boxShadow: "0 2px 4px rgba(0,0,0,0.15)",
                                  },
                                }}
                              >
                                <CardContent>
                                  <Box
                                    sx={{
                                      display: "flex",
                                      alignItems: "center",
                                    }}
                                  >
                                    <Box sx={{ flexGrow: 1 }}>
                                      <Typography
                                        variant="body2"
                                        color="text.secondary"
                                      >
                                        Task ID: {t._id}
                                      </Typography>
                                      <Typography
                                        variant="subtitle1"
                                        sx={{ mt: 1 }}
                                      >
                                        {t.taskSummary}
                                      </Typography>
                                    </Box>
                                    <IconButton
                                      onClick={(e) => handleMenuClick(e, t)}
                                      size="small"
                                    >
                                      <MoreVert />
                                    </IconButton>
                                  </Box>
                                </CardContent>
                              </Card>
                            )}
                          </Draggable>
                        ))}
                        {provided.placeholder}
                      </Box>
                    )}
                  </Droppable>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Box>
      </DragDropContext>

      {/* Create Task Modal */}

      <CustomModal
        open={createModalOpen}
        onClose={handleCloseCreateModal}
        title="Create New Task"
      >
        <form onSubmit={onSubmitCreateTask}>
          <TextField
            margin="normal"
            fullWidth
            label="Task Summary"
            name="taskSummary"
            value={taskData.taskSummary}
            onChange={onChange}
            sx={{ mb: 2 }}
          />
          <TextField
            margin="normal"
            fullWidth
            label="Acceptance Criteria"
            name="acceptanceCriteria"
            value={taskData.acceptanceCriteria}
            onChange={onChange}
            multiline
            rows={4}
            sx={{ mb: 2 }}
          />
          <FormControl fullWidth sx={{ mb: 3 }}>
            <InputLabel>Status</InputLabel>
            <Select
              name="status"
              value={taskData.status}
              label="Status"
              onChange={onChange}
            >
              <MenuItem value="todo">To Do</MenuItem>
              <MenuItem value="inProgress">In Progress</MenuItem>
              <MenuItem value="done">Done</MenuItem>
            </Select>
          </FormControl>
          <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 2 }}>
            <CustomButton
              label="Cancel"
              onClick={handleCloseCreateModal}
              variant="outlined"
            />
            <CustomButton label="Create Task" type="submit" loading={loading} />
          </Box>
        </form>
      </CustomModal>

      {/* Update Task Modal */}
      <CustomModal
        open={updateModalOpen}
        onClose={handleCloseUpdateModal}
        title="Update Task"
      >
        <form onSubmit={onUpdateSubmit}>
          <TextField
            margin="normal"
            fullWidth
            label="Task ID"
            value={taskData._id || ""}
            disabled
            sx={{ mb: 2 }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Task Summary"
            name="taskSummary"
            value={taskData.taskSummary || ""}
            onChange={onChange}
            sx={{ mb: 2 }}
          />
          <TextField
            margin="normal"
            fullWidth
            label="Acceptance Criteria"
            name="acceptanceCriteria"
            value={taskData.acceptanceCriteria || ""}
            onChange={onChange}
            multiline
            rows={4}
            sx={{ mb: 2 }}
          />
          <FormControl fullWidth sx={{ mb: 3 }}>
            <InputLabel>Status</InputLabel>
            <Select
              name="status"
              value={taskData.status || ""}
              label="Status"
              onChange={onChange}
            >
              <MenuItem value="todo">To Do</MenuItem>
              <MenuItem value="inProgress">In Progress</MenuItem>
              <MenuItem value="done">Done</MenuItem>
            </Select>
          </FormControl>
          <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 2 }}>
            <CustomButton
              label="Cancel"
              onClick={handleCloseUpdateModal}
              variant="outlined"
            />
            <CustomButton label="Update Task" type="submit" loading={loading} />
          </Box>
        </form>
      </CustomModal>

      {/* Task Menu */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem onClick={() => handleOpenUpdateModal(selectedTask)}>
          View/Update
        </MenuItem>
        <MenuItem onClick={handleDeleteClick} sx={{ color: "error.main" }}>
          Delete
        </MenuItem>
      </Menu>

      {/* Delete Confirmation Dialog */}
      <Dialog
        open={deleteDialogOpen}
        onClose={() => setDeleteDialogOpen(false)}
        PaperProps={{
          sx: {
            width: "100%",
            maxWidth: "400px",
            borderRadius: 2,
          },
        }}
      >
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent>
          <Typography>
            You are deleting the task "{selectedTask?.taskSummary}". This action
            cannot be undone.
          </Typography>
        </DialogContent>
        <DialogActions sx={{ p: 2.5 }}>
          <CustomButton
            label="Cancel"
            onClick={() => setDeleteDialogOpen(false)}
            variant="outlined"
          />
          <CustomButton
            label="Delete"
            onClick={handleDeleteConfirm}
            color="error"
          />
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default TaskList;
