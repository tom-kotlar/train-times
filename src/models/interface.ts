export interface Root {
    sourceId: number
    travelCardsAddonFlag: any
    outbound: Outbound[]
    return: any[]
    __typename: string
  }
  
  export interface Outbound {
    from: string
    fromCode: any
    to: string
    toCode: any
    journeyHash: string
    departDateTime: string
    arriveDateTime: string
    co2PerItem: number
    co2PerPassenger: number
    changes: string
    overtaken: boolean
    journeyLegs: JourneyLeg[]
    singleJourneyFares: SingleJourneyFare[]
    returnJourneyFares: any
    dualSingleJourneyFares: any
    openReturnJourneyFares: any
    splitFares: any
    plusBus: any
    __typename: string
  }

  export interface OutboundUpdate {
    from: string
    fromCode: any
    to: string
    toCode: any
    journeyHash: string
    departDateTime: string
    arriveDateTime: string
    co2PerItem: number
    co2PerPassenger: number
    changes: string
    overtaken: boolean
    journeyLegs: JourneyLeg[]
    singleJourneyFares: SingleJourneyFare[]
    returnJourneyFares: any
    dualSingleJourneyFares: any
    openReturnJourneyFares: any
    splitFares: any
    plusBus: any
    __typename: string
  }
  
  export interface JourneyLeg {
    id: string
    operator: string
    depart: string
    arrive: string
    arriveDateTime: string
    departDateTime: string
    reservableStatus: string
    callingPoints: CallingPoint[]
    __typename: string
  }
  
  export interface CallingPoint {
    stationName: string
    stationCode: string
    arrivalDateTime?: string
    departureDateTime?: string
    scheduledPlatform: string
    stationClassification: string
    stoppingPattern: string
    __typename: string
  }
  
  export interface SingleJourneyFare {
    providerId: string
    providerName: string
    identifiers: Identifiers
    type: string
    price: number
    currency: string
    fareHash: string
    split: any
    terms: Terms
    class: string
    singleOrReturn: string
    mobileTicketAvailable: boolean
    eTicketAvailable: boolean
    selfPrintAvailable: boolean
    railcardCode: string
    __typename: string
  }
  
  export interface Identifiers {
    transactionIdentifier: string
    journeyIdentifier: string
    provider: string
    fareIdentifier: string
    direction: any
    singleOrReturn: string
    bookingRef: any
    __typename: string
  }
  
  export interface Terms {
    availabilityRule: string
    changeRule: string
    childDiscount: string
    dynamicConditions: any[]
    generalDiscount: string
    generalValidity: any
    journeyBreakRule: string
    journeyType: string
    kioskAvailable: string
    preBookingRequirement: string
    railcardDiscount: string
    route: string
    refundCancellationRule: string
    reservationRule: string
    ticketTypeAltName: string
    ticketTypeClass: string
    ticketTypeCode: string
    ticketTypeConditionsDescription: string
    ticketTypeName: string
    todAvailable: string
    trainOperatingCompanyCode: string
    validOutRule: string
    validReturnRule: string
    __typename: string
  }
  