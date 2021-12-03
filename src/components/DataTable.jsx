import React from 'react'
import {Typography} from "@mui/material";
import makeStyles from '@mui/styles/makeStyles';
import { DataGrid, GridToolbarContainer, GridToolbarExport, GridToolbarFilterButton } from '@mui/x-data-grid';

function CustomToolbar() {
    return (
      <GridToolbarContainer style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
        <GridToolbarFilterButton />
        <GridToolbarExport />
      </GridToolbarContainer>
    );
  }

const localeText = {
    toolbarDensity: 'Размер строки',
    toolbarDensityLabel: 'Размер строки',
    toolbarDensityCompact: 'Маленький',
    toolbarDensityStandard: 'Средний',
    toolbarDensityComfortable: 'Большой',
    toolbarColumns: 'Колонки',
    toolbarColumnsLabel: 'Выбрать колонки',
    toolbarFilters: 'Фильтры',
    toolbarFiltersLabel: 'Показать фильтры',
    toolbarFiltersTooltipHide: 'Скрыть фильтры',
    toolbarFiltersTooltipShow: 'Показать фильтры',
    toolbarFiltersTooltipActive: (count) =>
      count !== 1 ? `${count} активный фильтр` : `${count} активный фильтр`,
    toolbarExport: 'Экспорт',
    toolbarExportLabel: 'Экспорт',
    toolbarExportCSV: 'Скачать в CSV',
    toolbarExportPrint: 'Печать',
    columnsPanelTextFieldLabel: 'Найти колонку',
    columnsPanelTextFieldPlaceholder: 'Заголовок колонки',
    columnsPanelDragIconLabel: 'Сортировать колонку',
    columnsPanelShowAllButton: 'Показать все',
    columnsPanelHideAllButton: 'Скрыть все',
    filterPanelAddFilter: 'Добавить фильтр',
    filterPanelDeleteIconLabel: 'Удалить',
    filterPanelOperators: 'Оператор',
    filterPanelOperatorAnd: 'И',
    filterPanelOperatorOr: 'Или',
    filterPanelColumns: 'Колонка',
    filterPanelInputLabel: 'Значение',
    filterPanelInputPlaceholder: 'Значение фильтра',
    filterOperatorContains: 'Содержит',
    filterOperatorEquals: 'Равен',
    filterOperatorStartsWith: 'Начинается с',
    filterOperatorEndsWith: 'Заканчивается на',
    filterOperatorIsEmpty: 'Пусто',
    filterOperatorIsNotEmpty: 'Не пустой',
    checkboxSelectionHeaderName: 'Ячейка выбора',
  }

const useStyles = makeStyles((theme)=>({
    container : {
        display: "column",
        alignItems : "center",
        borderRadius: "30px !important",
        boxShadow:  "35px 35px 70px #b3b3b3, -35px -35px 70px #ffffff",
    },
    dataGrid : {
        border : "none !important",
    },
    head : {
        textAlign : "center",
        paddingTop : "20px",
        color: "#555"
    }
}))

export default function DataTable({header,columns,data,setData}) {
    const classes = useStyles();
    return (
                <div className={classes.container}>
                    <Typography variant="h5" className={classes.head}>{header}</Typography>
                    <br/>
                    <div style={{ height: 600, width: '100%' }}>
                    <DataGrid
                        className={classes.dataGrid}
                        localeText={localeText}
                        rows={data}
                        columns={columns}
                        pageSize={10}
                        rowHeight={40}
                        rowsPerPageOptions={[10]}
                        disableColumnMenu={true}
                        disableSelectionOnClick
                        components={{
                            Toolbar: CustomToolbar,
                          }}
                    />
                    </div>
                </div>
    )
}
