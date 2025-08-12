export interface TableColumn {
  key: string;
  minWidth?: string;
  maxWidth?: string;
  label: React.ReactNode;
  icon?: React.ReactNode;
  align?: 'left' | 'center' | 'right';
  sortable?: boolean;
  filterable?: boolean;
  width?: string;
  render?: (value: any, row: any) => React.ReactNode;
}

export interface TableConfig {
  columns: TableColumn[];
  title: string;
  showPagination?: boolean;
  showFilters?: boolean;
  alternatingRows?: boolean;
  stickyHeader?: boolean;
}

export interface PaginationConfig {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}