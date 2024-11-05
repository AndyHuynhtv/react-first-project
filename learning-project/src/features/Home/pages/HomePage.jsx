import {
  Box,
  Button,
  Container,
  Dialog,
  DialogContent,
  DialogTitle,
  Pagination,
  Stack,
} from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { postApi } from "../../../api/postApi";
import { MediaCard } from "../../../components/Common/PostCard";
import { AddEditPostForm } from "../components/AddEditPostForm";
import {
  MDBCarousel,
  MDBCarouselItem,
  MDBCarouselCaption,
} from "mdb-react-ui-kit";

import "mdb-react-ui-kit/dist/css/mdb.min.css";
// import { Button } from "react-bootstrap";

export function HomePage() {
  const [showAddEditForm, setShowAddEditForm] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const [post, setPost] = useState(null);
  const [show, setShow] = useState(false);
  const [params, setParams] = useState({
    _page: 1,
    _limit: 6,
  });
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 6,
    _totalRows: 0,
  });

  const [postList, setPostList] = useState([]);
  const fetchData = useCallback(() => {
    postApi
      .getAll(params)
      .then((res) => {
        if (res) {
          setPostList(res.data);
          if (res.pagination) {
            const pagination = {
              ...res.pagination,
              _totalPage: Math.ceil(
                res.pagination._totalRows / res.pagination._limit
              ),
            };
            setPagination(pagination);
          }
        }
      })
      .catch((error) => {
        console.log("error: ", error);
      });
  }, [params]);
  // useEffect(() => {
  //   (() => {
  //     postApi
  //       .getAll(params)
  //       .then((res) => {
  //         if (res) {
  //           setPostList(res.data);
  //           if (res.pagination) {
  //             const pagination = {
  //               ...res.pagination,
  //               _totalPage: Math.ceil(
  //                 res.pagination._totalRows / res.pagination._limit
  //               ),
  //             };
  //             setPagination(pagination);
  //           }
  //         }
  //       })
  //       .catch((error) => {
  //         console.log("error: ", error);
  //       });
  //   })();
  // }, [params]);
  const navigate = useNavigate();
  useEffect(() => {
    fetchData();
  }, [fetchData]);
  // console.log("PostList: ", postList);
  function handleChange(e, page) {
    setParams({
      ...params,
      _page: page,
    });
  }
  async function handleDelete(id) {
    try {
      await postApi.delete(id);
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }

  function handleClose() {
    setPost(null);
    setShow(false);
  }

  function handleSubmit(formValues) {
    if (Boolean(post)) {
      postApi
        .update({
          ...formValues,
          id: post.id,
        })
        .then((res) => {
          if (res) {
            fetchData();
            handleClose();
            console.log(res);
          }
        })
        .catch((error) => {
          console.log(error);
        });

      return;
    }

    postApi
      .create(formValues)
      .then((res) => {
        if (res) {
          fetchData();
          handleClose();
          console.log(res);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <Box>
      <Box
        sx={{
          position: "relative",
          display: "flex",
          margin: "0 auto",
          width: "65%",
        }}
      >
        <ul
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            margin: "0 auto",
            width: "100%",
            listStyleType: "none",
            padding: 0,
          }}
        >
          <li
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              padding: "10px 20px",
            }}
          >
            <img
              src="https://js-post-ui-easy-frontend.vercel.app/assets/logo.50678c47.svg"
              style={{
                width: "150px",
                height: "40px",
                objectFit: "cover",
              }}
              alt="Logo"
            />
          </li>
          <li
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              paddingRight: "20px",
            }}
          >
            <button
              onClick={() => {
                setShow(true);
                // setPost(null);
              }}
              style={{
                color: "red",
                background: "none",
                border: "none",
                cursor: "pointer",
                fontSize: "20px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.querySelector("i").style.transform =
                  "rotate(360deg)";
                e.currentTarget.querySelector("i").style.transition =
                  "transform 0.5s ease";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.querySelector("i").style.transform =
                  "rotate(0deg)";
              }}
            >
              <i class="fa-solid fa-circle-plus"></i>
              Add new post
            </button>
          </li>
        </ul>
      </Box>
      <Box width="100%">
        <Stack>
          <MDBCarousel showControls showIndicators>
            <MDBCarouselItem itemId={1}>
              <img
                height="500px"
                src="https://mdbootstrap.com/img/new/slides/041.jpg"
                className="d-block w-100"
                alt="..."
              />
              <MDBCarouselCaption>
                <h5>First slide label</h5>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </MDBCarouselCaption>
            </MDBCarouselItem>
            <MDBCarouselItem itemId={2}>
              <img
                height="500px"
                src="https://picsum.photos/id/995/1368/400"
                className="d-block w-100"
                alt="..."
              />

              <MDBCarouselCaption>
                <h5>Second slide label</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </MDBCarouselCaption>
            </MDBCarouselItem>
            <MDBCarouselItem itemId={3}>
              <img
                height="500px"
                src="https://picsum.photos/id/992/1368/400"
                className="d-block w-100"
                alt="..."
              />
              <MDBCarouselCaption>
                <h5>Third slide label</h5>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </MDBCarouselCaption>
            </MDBCarouselItem>
          </MDBCarousel>
        </Stack>
      </Box>
      <Container>
        <Box
          sx={{
            width: "100%",
            margin: "auto",
          }}
        >
          <Stack direction="row" flexWrap="wrap" sx={{ sm: -1.5 }}>
            {Array.isArray(postList) &&
              postList.length > 0 &&
              postList.map((item, index) => (
                <Box
                  sx={{
                    width: { xs: "100%", sm: 1 / 2, md: 1 / 3 },
                  }}
                  key={index}
                >
                  <Box sx={{ p: 1.5, cursor: "pointer" }}>
                    <MediaCard
                      title={item.title}
                      author={item.author}
                      description={item.description}
                      imageUrl={item.imageUrl}
                      createdAt={item.createdAt}
                      onEdit={() => {
                        setShow(true);
                        setPost(item);
                      }}
                      onDelete={() => handleDelete(item.id)}
                      onGotoDetail={() => navigate(`/home/${item.id}`)}
                    />
                  </Box>
                </Box>
              ))}
          </Stack>
        </Box>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          margin="auto"
          my={2}
        >
          <Pagination
            page={params.page}
            count={Math.ceil(pagination._totalRows / params._limit)}
            onChange={handleChange}
          />
        </Stack>
      </Container>
      {/* <Dialog fullWidth maxWidth="sm" open={showAddEditForm}>
        <DialogTitle>{selectedPost ? "Edit post" : "Create post"}</DialogTitle>
        <DialogContent>
          <AddEditPostForm
            data={selectedPost}
            onCancel={handleClose}
            onSubmit={handleSubmit}
          />
        </DialogContent>
      </Dialog> */}
      <Dialog open={show} fullWidth maxWidth="md" onClose={handleClose}>
        <DialogTitle>Add Edit Post</DialogTitle>
        <DialogContent>
          <Box>
            <AddEditPostForm data={post} onSubmit={handleSubmit} />
          </Box>
        </DialogContent>
      </Dialog>
    </Box>
  );
}
