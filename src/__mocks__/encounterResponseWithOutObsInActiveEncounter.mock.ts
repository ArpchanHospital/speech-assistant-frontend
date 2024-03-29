export const mockEncounterResponseWithOutObsInActiveEncounter = {
  results: [
    {
      uuid: 'c7489ebf-25d9-476f-9e97-b8651e924ada',
      display: 'Consultation 11/24/2022',
      encounterDatetime: new Date().toISOString(),
      location: {
        uuid: 'baf7bd38-d225-11e4-9c67-080027b662ec',
        display: 'General Ward',
        name: 'General Ward',
        description: 'General Ward',
        address1: null,
        address2: null,
        cityVillage: null,
        stateProvince: 'Chattisgarh',
        country: null,
        postalCode: null,
        latitude: null,
        longitude: null,
        countyDistrict: 'Bilaspur',
        address3: null,
        address4: null,
        address5: null,
        address6: null,
        tags: [
          {
            uuid: '475d8fa3-5572-11e6-8be9-0800270d80ce',
            display: 'Visit Location',
            links: [
              {
                rel: 'self',
                uri: 'http://localhost/openmrs/ws/rest/v1/locationtag/475d8fa3-5572-11e6-8be9-0800270d80ce',
                resourceAlias: 'locationtag',
              },
            ],
          },
          {
            uuid: 'b8bbf83e-645f-451f-8efe-a0db56f09676',
            display: 'Login Location',
            links: [
              {
                rel: 'self',
                uri: 'http://localhost/openmrs/ws/rest/v1/locationtag/b8bbf83e-645f-451f-8efe-a0db56f09676',
                resourceAlias: 'locationtag',
              },
            ],
          },
          {
            uuid: 'a675e840-d225-11e4-9c67-080027b662ec',
            display: 'Admission Location',
            links: [
              {
                rel: 'self',
                uri: 'http://localhost/openmrs/ws/rest/v1/locationtag/a675e840-d225-11e4-9c67-080027b662ec',
                resourceAlias: 'locationtag',
              },
            ],
          },
        ],
        parentLocation: null,
        childLocations: [
          {
            uuid: 'e48fb2b3-d490-11e5-b193-0800270d80ce',
            display: 'General Ward - Room 2',
            links: [
              {
                rel: 'self',
                uri: 'http://localhost/openmrs/ws/rest/v1/location/e48fb2b3-d490-11e5-b193-0800270d80ce',
                resourceAlias: 'location',
              },
            ],
          },
          {
            uuid: 'baf83667-d225-11e4-9c67-080027b662ec',
            display: 'General Ward Room 1',
            links: [
              {
                rel: 'self',
                uri: 'http://localhost/openmrs/ws/rest/v1/location/baf83667-d225-11e4-9c67-080027b662ec',
                resourceAlias: 'location',
              },
            ],
          },
        ],
        retired: false,
        attributes: [
          {
            uuid: '1d3a3de3-9d5a-47c5-80f3-188bf60a241d',
            display: 'IdentifierSourceName: GAN',
            links: [
              {
                rel: 'self',
                uri: 'http://localhost/openmrs/ws/rest/v1/location/baf7bd38-d225-11e4-9c67-080027b662ec/attribute/1d3a3de3-9d5a-47c5-80f3-188bf60a241d',
                resourceAlias: 'attribute',
              },
            ],
          },
        ],
        address7: null,
        address8: null,
        address9: null,
        address10: null,
        address11: null,
        address12: null,
        address13: null,
        address14: null,
        address15: null,
        links: [
          {
            rel: 'self',
            uri: 'http://localhost/openmrs/ws/rest/v1/location/baf7bd38-d225-11e4-9c67-080027b662ec',
            resourceAlias: 'location',
          },
          {
            rel: 'full',
            uri: 'http://localhost/openmrs/ws/rest/v1/location/baf7bd38-d225-11e4-9c67-080027b662ec?v=full',
            resourceAlias: 'location',
          },
        ],
        resourceVersion: '2.0',
      },
      obs: [],
      visit: {
        uuid: '8281dd37-45c0-4a45-a939-ecb95fdb6ed7',
        display: 'OPD @ General Ward - 06/07/2017 03:58 PM',
        patient: {
          uuid: 'dc9444c6-ad55-4200-b6e9-407e025eb948',
          display: 'GAN203010 - Test Radiology',
          links: [
            {
              rel: 'self',
              uri: 'http://localhost/openmrs/ws/rest/v1/patient/dc9444c6-ad55-4200-b6e9-407e025eb948',
              resourceAlias: 'patient',
            },
          ],
        },
        visitType: {
          uuid: 'c22a5000-3f10-11e4-adec-0800271c1b75',
          display: 'OPD',
          links: [
            {
              rel: 'self',
              uri: 'http://localhost/openmrs/ws/rest/v1/visittype/c22a5000-3f10-11e4-adec-0800271c1b75',
              resourceAlias: 'visittype',
            },
          ],
        },
        indication: null,
        location: {
          uuid: 'baf7bd38-d225-11e4-9c67-080027b662ec',
          display: 'General Ward',
          links: [
            {
              rel: 'self',
              uri: 'http://localhost/openmrs/ws/rest/v1/location/baf7bd38-d225-11e4-9c67-080027b662ec',
              resourceAlias: 'location',
            },
          ],
        },
        startDatetime: '2017-06-07T15:58:48.000+0000',
        stopDatetime: '2022-11-24T06:41:08.000+0000',
        encounters: [
          {
            uuid: 'c7489ebf-25d9-476f-9e97-b8651e924ada',
            display: 'Consultation 11/24/2022',
            links: [
              {
                rel: 'self',
                uri: 'http://localhost/openmrs/ws/rest/v1/encounter/c7489ebf-25d9-476f-9e97-b8651e924ada',
                resourceAlias: 'encounter',
              },
            ],
          },
          {
            uuid: '62e331fa-8195-4bba-aa22-c5ced1532eb4',
            display: 'Consultation 11/24/2022',
            links: [
              {
                rel: 'self',
                uri: 'http://localhost/openmrs/ws/rest/v1/encounter/62e331fa-8195-4bba-aa22-c5ced1532eb4',
                resourceAlias: 'encounter',
              },
            ],
          },
          {
            uuid: '8f6b56cf-2751-4d1a-b9ba-ad33eb2a9542',
            display: 'Consultation 11/23/2022',
            links: [
              {
                rel: 'self',
                uri: 'http://localhost/openmrs/ws/rest/v1/encounter/8f6b56cf-2751-4d1a-b9ba-ad33eb2a9542',
                resourceAlias: 'encounter',
              },
            ],
          },
          {
            uuid: 'dd747884-0541-4f0e-95d0-601b4ada806b',
            display: 'Consultation 11/23/2022',
            links: [
              {
                rel: 'self',
                uri: 'http://localhost/openmrs/ws/rest/v1/encounter/dd747884-0541-4f0e-95d0-601b4ada806b',
                resourceAlias: 'encounter',
              },
            ],
          },
          {
            uuid: 'a1ea188c-d13a-45ce-bb10-bd8728c715bf',
            display: 'Consultation 11/23/2022',
            links: [
              {
                rel: 'self',
                uri: 'http://localhost/openmrs/ws/rest/v1/encounter/a1ea188c-d13a-45ce-bb10-bd8728c715bf',
                resourceAlias: 'encounter',
              },
            ],
          },
          {
            uuid: '4f474a29-77af-4889-8eaa-ea8020dcac88',
            display: 'Consultation 11/23/2022',
            links: [
              {
                rel: 'self',
                uri: 'http://localhost/openmrs/ws/rest/v1/encounter/4f474a29-77af-4889-8eaa-ea8020dcac88',
                resourceAlias: 'encounter',
              },
            ],
          },
          {
            uuid: '16b3bf19-fc6d-4189-9fa2-7f1b1dd33df3',
            display: 'Consultation 11/23/2022',
            links: [
              {
                rel: 'self',
                uri: 'http://localhost/openmrs/ws/rest/v1/encounter/16b3bf19-fc6d-4189-9fa2-7f1b1dd33df3',
                resourceAlias: 'encounter',
              },
            ],
          },
          {
            uuid: '1a5dd96f-be37-4c86-9166-46881c6947b7',
            display: 'Consultation 11/23/2022',
            links: [
              {
                rel: 'self',
                uri: 'http://localhost/openmrs/ws/rest/v1/encounter/1a5dd96f-be37-4c86-9166-46881c6947b7',
                resourceAlias: 'encounter',
              },
            ],
          },
          {
            uuid: '2bd5d60a-53b7-4477-95df-4c0730d192db',
            display: 'Consultation 11/23/2022',
            links: [
              {
                rel: 'self',
                uri: 'http://localhost/openmrs/ws/rest/v1/encounter/2bd5d60a-53b7-4477-95df-4c0730d192db',
                resourceAlias: 'encounter',
              },
            ],
          },
          {
            uuid: 'a1cb5a62-7a99-458f-8af6-7dac36248218',
            display: 'Consultation 11/23/2022',
            links: [
              {
                rel: 'self',
                uri: 'http://localhost/openmrs/ws/rest/v1/encounter/a1cb5a62-7a99-458f-8af6-7dac36248218',
                resourceAlias: 'encounter',
              },
            ],
          },
          {
            uuid: 'f62d98e2-02ef-4206-b7a0-08115f005600',
            display: 'Consultation 11/23/2022',
            links: [
              {
                rel: 'self',
                uri: 'http://localhost/openmrs/ws/rest/v1/encounter/f62d98e2-02ef-4206-b7a0-08115f005600',
                resourceAlias: 'encounter',
              },
            ],
          },
          {
            uuid: '8b9e5631-505a-4e94-a162-043a57337d46',
            display: 'Consultation 11/23/2022',
            links: [
              {
                rel: 'self',
                uri: 'http://localhost/openmrs/ws/rest/v1/encounter/8b9e5631-505a-4e94-a162-043a57337d46',
                resourceAlias: 'encounter',
              },
            ],
          },
          {
            uuid: '722060e0-e89a-4731-a61c-1482fdc7c939',
            display: 'Consultation 11/23/2022',
            links: [
              {
                rel: 'self',
                uri: 'http://localhost/openmrs/ws/rest/v1/encounter/722060e0-e89a-4731-a61c-1482fdc7c939',
                resourceAlias: 'encounter',
              },
            ],
          },
          {
            uuid: '629e6d1c-4e2a-4786-bb9e-c79258dfcd1b',
            display: 'Consultation 11/23/2022',
            links: [
              {
                rel: 'self',
                uri: 'http://localhost/openmrs/ws/rest/v1/encounter/629e6d1c-4e2a-4786-bb9e-c79258dfcd1b',
                resourceAlias: 'encounter',
              },
            ],
          },
          {
            uuid: '622862af-30bd-4da0-bce6-a188c0da7617',
            display: 'Consultation 06/07/2017',
            links: [
              {
                rel: 'self',
                uri: 'http://localhost/openmrs/ws/rest/v1/encounter/622862af-30bd-4da0-bce6-a188c0da7617',
                resourceAlias: 'encounter',
              },
            ],
          },
          {
            uuid: 'c86879a2-357b-4add-b109-231f4f076f79',
            display: 'REG 06/07/2017',
            links: [
              {
                rel: 'self',
                uri: 'http://localhost/openmrs/ws/rest/v1/encounter/c86879a2-357b-4add-b109-231f4f076f79',
                resourceAlias: 'encounter',
              },
            ],
          },
        ],
        attributes: [
          {
            uuid: '36977295-ff8a-4bcc-a84a-9350f5e70f2e',
            display: 'Visit Status: OPD',
            links: [
              {
                rel: 'self',
                uri: 'http://localhost/openmrs/ws/rest/v1/visit/8281dd37-45c0-4a45-a939-ecb95fdb6ed7/attribute/36977295-ff8a-4bcc-a84a-9350f5e70f2e',
                resourceAlias: 'attribute',
              },
            ],
          },
        ],
        voided: false,
        links: [
          {
            rel: 'self',
            uri: 'http://localhost/openmrs/ws/rest/v1/visit/8281dd37-45c0-4a45-a939-ecb95fdb6ed7',
            resourceAlias: 'visit',
          },
          {
            rel: 'full',
            uri: 'http://localhost/openmrs/ws/rest/v1/visit/8281dd37-45c0-4a45-a939-ecb95fdb6ed7?v=full',
            resourceAlias: 'visit',
          },
        ],
        resourceVersion: '1.9',
      },
      encounterProviders: [
        {
          uuid: '16d651a3-8988-4b11-811b-7e945de8e775',
          provider: {
            uuid: 'c1c26908-3f10-11e4-adec-0800271c1b75',
            display: 'superman - Super Man',
            links: [
              {
                rel: 'self',
                uri: 'http://localhost/openmrs/ws/rest/v1/provider/c1c26908-3f10-11e4-adec-0800271c1b75',
                resourceAlias: 'provider',
              },
            ],
          },
          encounterRole: {
            uuid: 'a0b03050-c99b-11e0-9572-0800200c9a66',
            display: 'Unknown',
            links: [
              {
                rel: 'self',
                uri: 'http://localhost/openmrs/ws/rest/v1/encounterrole/a0b03050-c99b-11e0-9572-0800200c9a66',
                resourceAlias: 'encounterrole',
              },
            ],
          },
          voided: false,
          links: [
            {
              rel: 'full',
              uri: 'http://localhost/openmrs/ws/rest/v1/encounter/c7489ebf-25d9-476f-9e97-b8651e924ada/encounterprovider/16d651a3-8988-4b11-811b-7e945de8e775?v=full',
              resourceAlias: 'encounterprovider',
            },
          ],
          resourceVersion: '1.9',
        },
      ],
    },
  ],
}
