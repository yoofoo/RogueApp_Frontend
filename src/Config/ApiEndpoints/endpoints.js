const EndPoints = {
    CommissionBaseUrl: `http://localhost:6002/`,
    ReportBaseUrl:`http://localhost:6003/`,
    CommissionPeriodList: {
        Url: `rogue/commission/getcommissionperiodlist/{CustomerId}`,
        Method: 'GET'
    },
    Commission: {
        Url: `rogue/commission/getcommission`,
        Method: 'POST',
        PostData: {
            CustomerID: 0,
            CommissionRunID: 0,
            PeriodID: 0,
            PageSize: 0,
            PageNo: 0
        }
    },
    HistoricalBonus: {
        Url: `rogue/commission/gethistoricalbonus`,
        Method: 'POST',
        PostData: {
            CustomerID: 0,
            CommissionRunID: 0,
            BonusID: 0,
            PageSize: 0,
            PageNo: 0
        }
    },
    RealTimeBonus: {
        Url: `rogue/commission/getrealtimebonus`,
        Method: 'POST',
        PostData: {
            CustomerID: 0,
            PeriodID: 0,
            BonusID: 0,
            PeriodTypeID:0
        }
    },
    Customer: {
        Url: `rogue/report/customerlist`,
        Method: 'POST',
        PostData: {
            CustomerID: 0,
            PageSize: 0,
            PageNo: 0,
            IsCount: false,
            SortName: '',
            SortOrder: '',
            SearchData:''
        }
    },

}

export default EndPoints