import { TableCell, Select, MenuItem } from "@mui/material";
import styles from "./RequestTable.module.css";

export default function StatusCell({ status }: { status: string }) {
  return (
    <TableCell align="center">
      <Select
        value={status}
        size="small"
        className={styles.statusSelect}
        displayEmpty
        disabled
      >
        <MenuItem value={status} className={styles.statusMenuItem}>
          <svg
            className={styles.statusIcon}
            focusable="false"
            aria-hidden="true"
            viewBox="0 0 24 24"
          >
            <path d="M7 10l5 5 5-5z" />
          </svg>
          {status}
        </MenuItem>
      </Select>
    </TableCell>
  );
}