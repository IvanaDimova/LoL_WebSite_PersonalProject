export const CommonConstant = {
    token: 'token',
    locationId: 'locationId',
    user: 'user',
    all: 'All',

    faqCategory: {
        Product: "Product Audit Non-Conformance Rates",
        YesNo: "Yes/No Survey Questions",
        ACE: "ACE Report"
    },
    masterCategories: {
        Garments: 'Garments',
        Bulk: 'Bulk',
        Mats: 'Mats'
    },
    editData: 'editdata'
};

export const SuperCategoryFormat = {
    Nested: 'NESTED',
    FAQ: 'FAQ'
}

export enum SourceEnum {
    WebSite = 1,
    Mobile = 2,
    Unknown = 9
}

export const Source = {
    [SourceEnum.WebSite]: "Website",
    [SourceEnum.Mobile]: "Mobile",
    [SourceEnum.Unknown]: 'Unknown',
    0: 'Unknown'
}