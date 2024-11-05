import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { postApi } from "../../../api/postApi";
import { useState } from "react";
import { Stack } from "@mui/material";
import { Box, Typography, Container, IconButton } from "@mui/material";
import dayjs from "dayjs";
import EditIcon from "@mui/icons-material/Edit";
import zIndex from "@mui/material/styles/zIndex";
export function HomeDetail() {
  const { id } = useParams();
  const [data, setData] = useState({});
  useEffect(() => {
    if (id) {
      (async () => {
        try {
          const res = await postApi.getById(id);
          setData(res);
        } catch (error) {
          console.log("Error: ", error);
        }
      })();
    }
  }, [id]);
  return (
    <Box position="relative">
      <Box
        sx={{
          display: "flex",
          position: "absolute",
          zIndex: "2",
          alignItems: "center",
          gap: 2,
          backgroundColor: "white",
          width: "100%",
          height: "100px",
        }}
      >
        <Box
          sx={{
            position: "relative",
            display: "flex",
            margin: "0 auto",
            width: "100%",
          }}
        >
          <ul
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              margin: "0 auto",
              width: "60%",
              listStyleType: "none",
              padding: 0,
            }}
          >
            <li
              style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                paddingLeft: "20px",
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
              {/* <EditIcon
                style={{
                  color: "red",
                  fontSize: "24px",
                  backgroundColor: "transparent",
                  cursor: "pointer",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.1)")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.backgroundColor = "transparent")
                }
              /> */}
              <button
                style={{
                  color: "red",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "16px", // Bạn có thể điều chỉnh kích thước phông chữ ở đây
                }}
              >
                Edit post
              </button>
            </li>
          </ul>
        </Box>
      </Box>
      <Box component="img" src={data.imageUrl} width="100%"></Box>
      <Box
        sx={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",

          width: "100%",
          height: "150px",
          margin: "0 auto",
          padding: 4,
          marginTop: "0px",

          backgroundColor: "white",

          //animation
        }}
      ></Box>
      <Box
        sx={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",

          width: "60%",
          backgroundColor: "white",

          margin: "0 auto",
          marginTop: "-270px",
          padding: 4,

          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
          borderRadius: 2,
        }}
      >
        <Container display="flex" alignItems="center">
          <Stack>
            <Box>
              <Typography variant="h2">{data.title}</Typography>
              <Typography
                variant="body2"
                sx={{
                  padding: "10px 0",
                  fontStyle: "italic",
                  lineHeight: "1.5",
                }}
              >
                by: {data.author} - {dayjs(data.createdAt).format("DD/MM/YYYY")}{" "}
              </Typography>

              <Typography
                sx={{
                  border: "1px grey solid",
                }}
              ></Typography>
              <Typography variant="body1" lineHeight="1.5" fontStyle="inherit">
                <p> {data.description} </p>
              </Typography>

              <Typography variant="body1" lineHeight="1.5" fontStyle="inherit">
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                  totam pariatur quibusdam tenetur nemo tempora incidunt ex
                  doloremque exercitationem dicta. Corporis fuga totam nulla
                  voluptatibus possimus similique aliquid nobis illo.
                </p>
              </Typography>
              <Typography variant="body1" lineHeight="1.5" fontStyle="inherit">
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                  totam pariatur quibusdam tenetur nemo tempora incidunt ex
                  doloremque exercitationem dicta. Corporis fuga totam nulla
                  voluptatibus possimus similique aliquid nobis illo.
                </p>
              </Typography>
              <Box
                component="img"
                src="https://picsum.photos/1368/1000"
                width="100%"
                height="600px"
              ></Box>
              <Typography variant="body1" lineHeight="1.5" fontStyle="inherit">
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                  totam pariatur quibusdam tenetur nemo tempora incidunt ex
                  doloremque exercitationem dicta. Corporis fuga totam nulla
                  voluptatibus possimus similique aliquid nobis illo.
                </p>
              </Typography>
              <Typography variant="body1" lineHeight="1.5" fontStyle="inherit">
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                  totam pariatur quibusdam tenetur nemo tempora incidunt ex
                  doloremque exercitationem dicta. Corporis fuga totam nulla
                  voluptatibus possimus similique aliquid nobis illo.
                </p>
              </Typography>
              <Typography variant="body1" lineHeight="1.5" fontStyle="inherit">
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                  totam pariatur quibusdam tenetur nemo tempora incidunt ex
                  doloremque exercitationem dicta. Corporis fuga totam nulla
                  voluptatibus possimus similique aliquid nobis illo.
                </p>
              </Typography>
              <Box
                component="img"
                src="https://picsum.photos/1369/1000"
                width="100%"
                height="600px"
              ></Box>
              <Typography variant="body1" lineHeight="1.5" fontStyle="inherit">
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                  totam pariatur quibusdam tenetur nemo tempora incidunt ex
                  doloremque exercitationem dicta. Corporis fuga totam nulla
                  voluptatibus possimus similique aliquid nobis illo.
                </p>
              </Typography>
              <Box
                component="img"
                src="https://picsum.photos/1370/1000"
                width="100%"
                height="600px"
              ></Box>
              <Typography variant="body1" lineHeight="1.5" fontStyle="inherit">
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                  totam pariatur quibusdam tenetur nemo tempora incidunt ex
                  doloremque exercitationem dicta. Corporis fuga totam nulla
                  voluptatibus possimus similique aliquid nobis illo.
                </p>
              </Typography>
              <Typography variant="body1" lineHeight="1.5" fontStyle="inherit">
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                  totam pariatur quibusdam tenetur nemo tempora incidunt ex
                  doloremque exercitationem dicta. Corporis fuga totam nulla
                  voluptatibus possimus similique aliquid nobis illo.
                </p>
              </Typography>
              <Typography variant="body1" lineHeight="1.5" fontStyle="inherit">
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                  totam pariatur quibusdam tenetur nemo tempora incidunt ex
                  doloremque exercitationem dicta. Corporis fuga totam nulla
                  voluptatibus possimus similique aliquid nobis illo.
                </p>
              </Typography>
            </Box>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
