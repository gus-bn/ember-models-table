import { ComponentLike } from '@glint/template';
import { TrackedArray } from 'tracked-built-ins';
import { ModelsTableArgs } from './models-table-args.interface';
import ModelsTableColumn from '../../utils/emt/emt-column';
import { SortConstants } from '../../constants/sort-constants';
import DefaultTheme from '../../services/emt-themes/default';
import { ColumnSet } from '../column-set.interface';
import { ColumnDropdownOptions } from '../column-dropdown-options.interface';
import { RowInteractionClb } from '../../types/row-interaction-clb.type';
import { ModelsTableDataItem } from '../../types/models-table-data-item.type';
import { GroupedHeader } from '../grouped-header.interface';
import { SelectOption } from '../select-option.interface';
import { GlobalFilterSignature } from '../components/models-table/themes/default/global-filter-signature.interface';
import { ColumnsDropdownSignature } from '../components/models-table/themes/default/columns-dropdown-signature.interface';
import { TableSignature } from '../components/models-table/themes/default/table-signature.interface';
import { DataGroupBySelectSignature } from '../components/models-table/themes/default/data-group-by-select-signature.interface';
import { FooterSignature } from '../components/models-table/themes/default/footer-signature.interface';
import { SummarySignature } from '../components/models-table/themes/default/summary-signature.interface';
import { PageSizeSelectSignature } from '../components/models-table/themes/default/page-size-select-signature.interface';
import { PaginationNumericSignature } from '../components/models-table/themes/default/pagination-numeric-signature.interface';
import { PaginationSimpleSignature } from '../components/models-table/themes/default/pagination-simple-signature.interface';

export interface ModelsTableSignature<T> {
  Element: HTMLDivElement;
  Args: ModelsTableArgs & T;
  Blocks: {
    default: [
      {
        GlobalFilter: ComponentLike<GlobalFilterSignature>;
        ColumnsDropdown: ComponentLike<ColumnsDropdownSignature>;
        Table: ComponentLike<TableSignature>;
        DataGroupBySelect: ComponentLike<DataGroupBySelectSignature>;
        Footer: ComponentLike<FooterSignature>;
        Summary: ComponentLike<SummarySignature>;
        PageSizeSelect: ComponentLike<PageSizeSelectSignature>;
        PaginationNumeric: ComponentLike<PaginationNumericSignature>;
        PaginationSimple: ComponentLike<PaginationSimpleSignature>;
        isLoading: boolean;
        isError: boolean;
        groupedHeaders: GroupedHeader[][];
        processedColumns: ModelsTableColumn[];
        visibleProcessedColumns: ModelsTableColumn[];
        visibleContent: TrackedArray<ModelsTableDataItem>;
        sortByGroupedFieldDirection: SortConstants;
        groupedVisibleContent: TrackedArray<ModelsTableDataItem[]>;
        groupedVisibleContentValuesOrder: string[];
        groupedArrangedContent: TrackedArray<ModelsTableDataItem>;
        displayGroupedValueAs: string;
        useDataGrouping: boolean;
        anyFilterUsed: boolean;
        currentGroupingPropertyName: string;
        collapsedGroupValues: TrackedArray<any>;
        globalFilter: string;
        globalFilterUsed: boolean;
        useFilteringByColumns: boolean;
        pagesCount: number;
        recordsCount: number;
        firstIndex: number;
        lastIndex: number;
        pageSize: number;
        currentPageNumber: number;
        pageSizeOptions: TrackedArray<SelectOption>;
        currentPageNumberOptions: SelectOption[];
        columnDropdownOptions: ColumnDropdownOptions;
        allColumnsAreHidden: boolean;
        dataGroupOptions: SelectOption[];
        themeInstance: DefaultTheme;
        expandedItems: ModelsTableDataItem[];
        selectedItems: TrackedArray<ModelsTableDataItem>;
        sortProperties: TrackedArray<string>;
        showAllColumns: () => void;
        hideAllColumns: () => void;
        restoreDefaultVisibility: () => void;
        toggleColumnSetVisibility: (columnSetToToggle: ColumnSet) => void;
        toggleColumnVisibility: (column: ModelsTableColumn) => void;
        expandRow: RowInteractionClb;
        collapseRow: RowInteractionClb;
        expandAllRows: () => void;
        collapseAllRows: () => void;
        toggleAllSelection: () => void;
        clickOnRow: RowInteractionClb;
        goToPage: (pageNumber: number) => void;
        clearFilters: () => void;
        sort: (column: ModelsTableColumn) => void;
        toggleGroupedRowsSelection: (groupedValue: string) => void;
        toggleGroupedRowsExpands: (groupedValue: string) => void;
        toggleGroupedRows: (groupedValue: string) => void;
        doubleClickOnRow: RowInteractionClb;
        hoverOnRow: RowInteractionClb;
        outRow: RowInteractionClb;
        changePageSize: (newPageSize: string) => void;
        changeGlobalFilter: (e: Event | string) => void;
        changeColumnFilter: (
          newColumnFilterValue: string,
          column: ModelsTableColumn
        ) => void;
        changeGroupingPropertyName: (newGroupingPropertyName: string) => void;
      }
    ];
  };
}
