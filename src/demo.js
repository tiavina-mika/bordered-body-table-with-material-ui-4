import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  root: {
    width: "100%",
    overflowX: "auto"
  },
  table: {
    minWidth: 650
  },
  body: {},
  bordered: {
    borderRadius: 18
  },
  cell: {
    color: "#fff",
    background: "#0b243e"
  },
  cellTopLeft: {
    borderTopLeftRadius: 18
  },
  cellTopRight: {
    borderTopRightRadius: 18
  },
  cellBottomLeft: {
    borderBottomLeftRadius: 18
  },
  cellBottomRight: {
    borderBottomRightRadius: 18
  }
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9)
];

export default function SimpleTable() {
  const classes = useStyles();

  // console.log(rows[rows.length - 1])

  return (
    <Paper className={classes.root}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={row.name} className={classes.body}>
              <TableCell
                className={clsx(
                  classes.cell,
                  index === 0 && classes.cellTopLeft,
                  index === rows.length - 1 && classes.cellBottomLeft
                )}
                component="th"
                scope="row"
              >
                {row.name}
              </TableCell>
              <TableCell className={classes.cell} align="right">
                {row.calories}
              </TableCell>
              <TableCell className={classes.cell} align="right">
                {row.fat}
              </TableCell>
              <TableCell className={classes.cell} align="right">
                {row.carbs}
              </TableCell>
              <TableCell
                className={clsx(
                  classes.cell,
                  index === 0 && classes.cellTopRight,
                  index === rows.length - 1 && classes.cellBottomRight
                )}
                align="right"
              >
                {row.protein}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}
