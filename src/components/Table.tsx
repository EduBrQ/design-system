import type { TableHTMLAttributes, HTMLAttributes, ThHTMLAttributes, TdHTMLAttributes } from "react";

function TableRoot({ className, ...rest }: TableHTMLAttributes<HTMLTableElement>) {
  return <table className={["eds-table", className].filter(Boolean).join(" ")} {...rest} />;
}

function TableHead(props: HTMLAttributes<HTMLTableSectionElement>) {
  return <thead {...props} />;
}

function TableBody(props: HTMLAttributes<HTMLTableSectionElement>) {
  return <tbody {...props} />;
}

function TableRow(props: HTMLAttributes<HTMLTableRowElement>) {
  return <tr {...props} />;
}

function TableHeaderCell(props: ThHTMLAttributes<HTMLTableCellElement>) {
  return <th {...props} />;
}

function TableCell(props: TdHTMLAttributes<HTMLTableCellElement>) {
  return <td {...props} />;
}

export const Table = Object.assign(TableRoot, {
  Head: TableHead,
  Body: TableBody,
  Row: TableRow,
  Th: TableHeaderCell,
  Td: TableCell,
});
