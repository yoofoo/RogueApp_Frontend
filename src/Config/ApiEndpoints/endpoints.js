const EndPoints = {
    CommissionBaseUrl: `http://localhost:6002/`,
    Report: {
        CustomerListUrl: `http://localhost:6003/`,
        ClubCoutureCustomer: `http://localhost:6004/`
    },
    Order: {
        InventoryOrders: {
            Url: `http://localhost:6005/rogue/report/inventoryorders`,
            Method: 'POST',
        },
        PersonalUseOrders: {
            Url: `http://localhost:6006/rogue/report/personaluseorders`,
            Method: 'POST',
        }
    },
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
            PeriodTypeID: 0
        }
    },
    Customer: {
        Url: `rogue/report/customer`,
        Method: 'POST',
        PostData: {
            CustomerID: 0,
            PageSize: 0,
            PageNo: 0,
            IsCount: false,
            SortName: '',
            SortOrder: '',
            SearchData: ''
        }
    },
    CustomerDetails: {
        Url: `rogue/report/customerdetails`,
        Method: 'POST',
        PostData: {
            CustomerID: 0,
            ID: 0
        }
    },
    OrderList: {
        Url: `rogue/report/orderlist`,
        Method: 'POST',
        PostData: {
            CustomerID: 0,
            ID: 0,
            PageSize: 10,
            PageNo: 1,
            IsCount: false,
            SortName: '',
            SortOrder: ''
        }
    },
    AutoOrderList: {
        Url: `rogue/report/autoorderlist`,
        Method: 'POST',
        PostData: {
            CustomerID: 0,
            ID: 0,
            PageSize: 10,
            PageNo: 1,
            IsCount: false,
            SortName: '',
            SortOrder: ''
        }
    },
    ClubCoutureCustomer: {
        Url: `rogue/report/clubcouturecustomer`,
        Method: 'POST',
        PostData: {
            CustomerID: 0,
            PageSize: 0,
            PageNo: 0,
            IsCount: false,
            IncludeClosedAccounts: false,
            SortName: '',
            SortOrder: '',
            SearchData: ''
        }
    },
    VolumeList: {
        Url: `rogue/report/volumes`,
        Method: 'POST',
        PostData: {
            ID: 0,
            PageSize: 10,
            PageNo: 1,
            IsCount: false,
            SortName: '',
            SortOrder: ''
        }
    },
    Activity: {
        Url: `rogue/report/activity/{id}`,
        Method: 'GET'
    },
    Rank: {
        Url: `rogue/report/rankadvancement/{id}`,
        Method: 'GET'
    }
}

export default EndPoints