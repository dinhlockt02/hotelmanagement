import {
  Box,
  Button,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TablePagination,
  TableRow,
} from "@mui/material";
import { useState } from "react";
import CustomTableHead from "../../ui-component/CustomTableHead";
import Search from "../../ui-component/Search";
import SearchNotFound from "../../ui-component/SearchNotFound";
import applySortFilter from "../../utils/table-sort-filter";
import MoreMenu from "./MoreMenu";
import NewRoomModal from "./NewRoomModal";

export default function RoomList({ data, columns, searchField }) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [filterName, setFilterName] = useState("");
  const [order, setOrder] = useState("    ");
  const [orderBy, setOrderBy] = useState("number");
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleFilterByName = (event) => {
    setFilterName(event.target.value);
  };

  const filteredData = applySortFilter(
    data,
    order,
    orderBy,
    searchField,
    filterName
  );

  const isUserNotFound = filteredData.length === 0;

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Search
          placeholder="Tìm phòng"
          filterName={filterName}
          setFilterName={handleFilterByName}
        />
        <Button
          onClick={handleOpen}
          variant="outlined"
          sx={{ ml: 2, py: "12px", borderRadius: 3 }}
        >
          Thêm phòng
        </Button>
      </Box>

      {open && <NewRoomModal handleClose={handleClose} />}

      <TableContainer sx={{ maxHeight: 460 }}>
        <Table stickyHeader aria-label="sticky table">
          <CustomTableHead
            order={order}
            orderBy={orderBy}
            columns={columns}
            onRequestSort={handleRequestSort}
          />
          <TableBody>
            {filteredData
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                  {columns.map((column) => {
                    const value = row[column.id];

                    switch (column.id) {
                      case "more":
                        return (
                          <TableCell align="center" key={row.id}>
                            <MoreMenu room={row} />
                          </TableCell>
                        );
                      case "status":
                        return (
                          <TableCell align="left" key="more">
                            {value ? (
                              <Chip
                                label="Đã đặt"
                                color="warning"
                                sx={{ fontSize: "13px" }}
                              />
                            ) : (
                              <Chip
                                label="Còn trống"
                                color="primary"
                                sx={{ fontSize: "13px" }}
                              />
                            )}
                          </TableCell>
                        );
                      default:
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                    }
                  })}
                </TableRow>
              ))}
          </TableBody>
          {isUserNotFound && (
            <TableBody>
              <TableRow>
                <TableCell align="center" colSpan={6} sx={{ py: 6 }}>
                  <SearchNotFound searchQuery={filterName} />
                </TableCell>
              </TableRow>
            </TableBody>
          )}
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions
        component="div"
        count={filteredData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        sx={{ mr: 2 }}
      />
    </>
  );
}
