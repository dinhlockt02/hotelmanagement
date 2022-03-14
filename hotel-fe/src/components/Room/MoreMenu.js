import { Box, Button, Tooltip } from "@mui/material";
import { IconCirclePlus, IconTrash, IconCreditCard } from "@tabler/icons";
// import { Link } from "react-router-dom";

export default function MoreMenu({ room }) {
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "right" }}>
        {room.status ? (
          <Tooltip title="Thanh toán">
            <Button variant="outlined" color="success">
              <IconCreditCard />
            </Button>
          </Tooltip>
        ) : (
          <>
            <Tooltip title="Thuê phòng">
              <Button variant="outlined" sx={{ mr: 1 }}>
                <IconCirclePlus />
              </Button>
            </Tooltip>
            <Tooltip title="Xoá phòng">
              <Button variant="outlined" color="error">
                <IconTrash color="#F44336" />
              </Button>
            </Tooltip>
          </>
        )}
      </Box>
    </>
  );
}
