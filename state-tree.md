 ```js
 {
   auth: {
      token: '',
      user: {
         id: 1,
         displayName: 'User 1',
         photoUrl: 'http://'
      },
      isFetching: false
   },
   patients: {
      currentPage: 0,
      totalRecord: 0,
      totalPage: 0,
      limit: 10,
      items: {
         1: { id: 1, name: 'Patient 1', address: '151-0072 Tokyo, Shybuya-ku, Honmachi' },
         2: { id: 2, name: 'Patient 2', address: '151-0072 Tokyo, Shybuya-ku, Honmachi' },
         3: { id: 3, name: 'Patient 3', address: '151-0072 Tokyo, Shybuya-ku, Honmachi' }
      },
      isFetching: false
   },
   facilitiesMatch: {
      currentPage: 0,
      totalRecord: 0,
      totalPage: 0,
      limit: 10,
      items: {
         1: { id: 1, name: 'Hospital 1', address: '151-0072 Tokyo, Shybuya-ku, Honmachi', phone: '07012341234' },
         2: { id: 2, name: 'Hospital 2', address: '151-0072 Tokyo, Shybuya-ku, Honmachi', phone: '07012341234' },
         3: { id: 3, name: 'Hospital 3', address: '151-0072 Tokyo, Shybuya-ku, Honmachi', phone: '07012341234' }
      },
      isFetching: false
   },
   schedules: [
      { date: '20190501', time: '13:00' },
      { date: '20190502', time: '15:00' },
      { date: '20190503', time: '16:00' }
   ],
   requests: [
      {
         organizations: [
            { id: 1, name: 'Patient 1', address: '151-0072 Tokyo, Shybuya-ku, Honmachi', distance: '1km' },
            { id: 2, name: 'Patient 2', address: '151-0072 Tokyo, Shybuya-ku, Honmachi', distance: '2km' },
            { id: 3, name: 'Patient 3', address: '151-0072 Tokyo, Shybuya-ku, Honmachi', distance: '3km' }
         ],
         patients: [
            { id: 1, name: 'Patient 1', address: '151-0072 Tokyo, Shybuya-ku, Honmachi' },
            { id: 2, name: 'Patient 2', address: '151-0072 Tokyo, Shybuya-ku, Honmachi' },
            { id: 3, name: 'Patient 3', address: '151-0072 Tokyo, Shybuya-ku, Honmachi' }
         ],
         availableTimeSlot: [
            { date: '20190501', time: '13:00' },
            { date: '20190502', time: '15:00' },
            { date: '20190503', time: '16:00' }
         ],
         isApproved: false,
      }
   ],
   chat: {
      organization: { id: 1, name: 'Patient 1', address: '151-0072 Tokyo, Shybuya-ku, Honmachi', distance: '1km' },
      patient: { id: 1, name: 'Patient 1', address: '151-0072 Tokyo, Shybuya-ku, Honmachi' },
      availableTimeSlot: [
         { date: '20190501', time: '13:00' },
         { date: '20190502', time: '15:00' }
      ]
   },
   jobs: {
      currentPage: 0,
      totalRecord: 0,
      totalPage: 0,
      limit: 10,
      items: {
         1: { id: 1, name: 'Patient 1', address: '151-0072 Tokyo, Shybuya-ku, Honmachi', distance: '1km', availableTimeSlot: [{ date: '20190501', time: '13:00' }] },
         2: { id: 2, name: 'Patient 2', address: '151-0072 Tokyo, Shybuya-ku, Honmachi', distance: '2km', availableTimeSlot: [{ date: '20190501', time: '13:00' }] },
         3: { id: 3, name: 'Patient 3', address: '151-0072 Tokyo, Shybuya-ku, Honmachi', distance: '3km', availableTimeSlot: [{ date: '20190501', time: '13:00' }] }
      },
      isFetching: false
   },
   staffs: {
      currentPage: 0,
      totalRecord: 0,
      totalPage: 0,
      limit: 10,
      items: {
         1: { id: 1, name: 'Staff 1', email: 'demo@chatbowl.com', phone: '07012341234' },
         2: { id: 2, name: 'Staff 2', email: 'demo@chatbowl.com', phone: '07012341234' },
         3: { id: 3, name: 'Staff 2', email: 'demo@chatbowl.com', phone: '07012341234' }
      },
      isFetching: false
   },
   organizations: {
      currentPage: 0,
      totalRecord: 0,
      totalPage: 0,
      limit: 10,
      items: {
         1: { id: 1, name: 'Hospital 1', address: '151-0072 Tokyo, Shybuya-ku, Honmachi', phone: '07012341234' },
         2: { id: 2, name: 'Hospital 2', address: '151-0072 Tokyo, Shybuya-ku, Honmachi', phone: '07012341234' },
         3: { id: 3, name: 'Hospital 3', address: '151-0072 Tokyo, Shybuya-ku, Honmachi', phone: '07012341234' }
      },
      isFetching: false
   }
}
```