import Image from 'next/image'

const acomodacoes = [
    {
      "number": 1,
      "date": "8 - 13 de jan",
      "host": "Millena",
      "id": "583d0cce-c4e1-42d6-9afb-8b3ba2c26d93",
      "title": "Rancho da Lua, tranquilo e rodeado por montanhas",
      "slug": "colonia-de-pescadores-brasil",
      "location": {
        "description": "Colônia de Pescadores, Brasil",
        "city": "Bonito",
        "state": "Mato Grosso do Sul",
        "country": "Brasil"
      },
      "hasBadge": true,
      "price": 229,
      "rating": 4.5,
      "testimonials": [
        {
          "id": "aa625d67-8316-4996-970e-e13b36150cc4",
          "name": "Guterre",
          "image": "https://web.codans.com.br/airbnb/img/feedback/aa625d67-8316-4996-970e-e13b36150cc4.jpg",
          "comment": "Bacon ipsum dolor amet drumstick cupim ribeye bacon alcatra chislic kielbasa chicken, tri-tip spare ribs turkey meatball.",
          "rating": 5,
          "customerTime": 5,
          "createdAt": 5,
          "stayedAt": 5
        },
        {
          "id": "a01fd4e8-510c-46d2-a79a-c9dc8e8fbd22",
          "name": "Adónis",
          "image": "https://web.codans.com.br/airbnb/img/feedback/a01fd4e8-510c-46d2-a79a-c9dc8e8fbd22.jpg",
          "comment": "Bacon ipsum dolor amet porchetta tri-tip doner, chicken pork loin pork tenderloin meatball andouille frankfurter rump kevin.",
          "rating": 4,
          "customerTime": 5,
          "createdAt": 7,
          "stayedAt": 6
        },
        {
          "id": "e7450683-808f-4970-9d44-1154c9544639",
          "name": "Giovana",
          "image": "https://web.codans.com.br/airbnb/img/feedback/e7450683-808f-4970-9d44-1154c9544639.jpg",
          "comment": "Bacon ipsum dolor amet rump tri-tip picanha tail hamburger shank boudin pork cupim shoulder jerky pancetta.",
          "rating": 4.5,
          "customerTime": 3,
          "createdAt": 8,
          "stayedAt": 7
        }
      ],
      "photos": [
        {
          "id": "bc78b53b-7ca1-4077-be48-04d33b7fa4fd",
          "source": "https://web.codans.com.br/airbnb/img/accommodation/01/0001.jpg",
          "description": "Bacon ipsum dolor amet short loin strip steak cow, bresaola ground round tail chicken drumstick cupim."
        },
        {
          "id": "96be5596-e7ec-43da-a695-a863893a115b",
          "source": "https://web.codans.com.br/airbnb/img/accommodation/01/0002.jpg",
          "description": "Bacon ipsum dolor amet biltong meatloaf pork ground round salami."
        },
        {
          "id": "6070df07-8f50-488a-a7cd-14a1b0e04cec",
          "source": "https://web.codans.com.br/airbnb/img/accommodation/01/0010.jpg",
          "description": "Bacon ipsum dolor amet tongue kielbasa drumstick bacon pancetta doner biltong short loin prosciutto cow."
        },
        {
          "id": "3d8998ee-0ab8-4af3-80c1-57791d1c54cf",
          "source": "https://web.codans.com.br/airbnb/img/accommodation/01/0004.jpg",
          "description": "Bacon ipsum dolor amet filet mignon frankfurter swine doner tongue sausage hamburger, bacon meatball picanha."
        },
        {
          "id": "0794ed1d-e6a6-4b78-b8ae-c2c90ca22d5b",
          "source": "https://web.codans.com.br/airbnb/img/accommodation/01/0005.jpg",
          "description": "Bacon ipsum dolor amet chuck t-bone alcatra burgdoggen jowl tongue pork cupim ball tip."
        },
        {
          "id": "55e82a85-f4aa-4e8c-bf85-9f58e6c184a1",
          "source": "https://web.codans.com.br/airbnb/img/accommodation/01/0006.jpg",
          "description": "Bacon ipsum dolor amet spare ribs rump cupim, meatball chicken flank frankfurter salami shank."
        },
        {
          "id": "2defff65-5079-4842-ac2f-361e7ed300f7",
          "source": "https://web.codans.com.br/airbnb/img/accommodation/01/0007.jpg",
          "description": "Bacon ipsum dolor amet shank pork belly tri-tip, ham doner salami ribeye hamburger kevin."
        },
        {
          "id": "6402902e-5143-42f1-b530-b66bfe8afa12",
          "source": "https://web.codans.com.br/airbnb/img/accommodation/01/0008.jpg",
          "description": "Bacon ipsum dolor amet sirloin porchetta landjaeger biltong swine filet mignon venison leberkas."
        },
        {
          "id": "b595856f-7dae-4e75-8fbd-e3a997966331",
          "source": "https://web.codans.com.br/airbnb/img/accommodation/01/0009.jpg",
          "description": "Bacon ipsum dolor amet jerky kielbasa brisket andouille pig kevin venison alcatra boudin flank."
        },
        {
          "id": "73ad7c87-7ff3-40b0-8f0e-49747fa1e65f",
          "source": "https://web.codans.com.br/airbnb/img/accommodation/01/0010.jpg",
          "description": "Bacon ipsum dolor amet swine pig kevin bacon, chuck fatback jerky porchetta alcatra turducken."
        },
        {
          "id": "0864e5a5-cda7-42aa-828a-a53768b64806",
          "source": "https://web.codans.com.br/airbnb/img/accommodation/01/0011.jpg",
          "description": "Bacon ipsum dolor amet kielbasa prosciutto spare ribs pastrami meatloaf corned beef."
        },
        {
          "id": "121b71af-01e7-4300-9659-60108165aa66",
          "source": "https://web.codans.com.br/airbnb/img/accommodation/01/0012.jpg",
          "description": "Bacon ipsum dolor amet shoulder jowl chicken beef, frankfurter ball tip pork belly filet mignon fatback brisket pork chop venison hamburger pancetta salami."
        },
        {
          "id": "3e67d3ce-e933-4664-bca9-7ba293835197",
          "source": "https://web.codans.com.br/airbnb/img/accommodation/01/0013.jpg",
          "description": "Bacon ipsum dolor amet cupim pastrami strip steak hamburger, pork chop capicola beef ribs kielbasa."
        },
        {
          "id": "6da2c5a3-bf95-46a2-9d3b-584d65c784c6",
          "source": "https://web.codans.com.br/airbnb/img/accommodation/01/0014.jpg",
          "description": "Bacon ipsum dolor amet alcatra leberkas kevin bresaola salami ham picanha pork chop pancetta tenderloin sirloin corned beef short loin."
        },
        {
          "id": "29be3c50-f868-4d07-8d7d-ae3f1b37c5d7",
          "source": "https://web.codans.com.br/airbnb/img/accommodation/01/0015.jpg",
          "description": "Bacon ipsum dolor amet ham hock cupim leberkas boudin, salami meatball beef ribs flank chuck."
        },
        {
          "id": "c595cd31-7544-448f-98a4-04183b84a1a1",
          "source": "https://web.codans.com.br/airbnb/img/accommodation/01/0016.jpg",
          "description": "Bacon ipsum dolor amet shankle pork brisket ball tip jowl pork belly tail ham."
        },
        {
          "id": "457effcf-e9ae-479a-867b-af39f55476d2",
          "source": "https://web.codans.com.br/airbnb/img/accommodation/01/0017.jpg",
          "description": "Bacon ipsum dolor amet drumstick jerky turkey sausage shankle venison andouille ham hock pork belly pig jowl."
        },
        {
          "id": "84d53699-1a95-47b8-b7b9-fab9ba5a6c33",
          "source": "https://web.codans.com.br/airbnb/img/accommodation/01/0018.jpg",
          "description": "Bacon ipsum dolor amet cupim tenderloin boudin doner, ground round chicken kevin turducken shank cow brisket fatback pig corned beef."
        },
        {
          "id": "918dbf0d-f493-423a-b8fe-5c2b415acf44",
          "source": "https://web.codans.com.br/airbnb/img/accommodation/01/0019.jpg",
          "description": "Bacon ipsum dolor amet cow shoulder landjaeger, turkey frankfurter meatball boudin kielbasa porchetta beef turducken fatback venison."
        },
        {
          "id": "96a28377-8840-4845-97cc-613f272cddd5",
          "source": "https://web.codans.com.br/airbnb/img/accommodation/01/0020.jpg",
          "description": "Bacon ipsum dolor amet beef ribs cow spare ribs picanha sausage tongue."
        },
        {
          "id": "123c1feb-ef74-4adc-a7a0-3e5ce098b40f",
          "source": "https://web.codans.com.br/airbnb/img/accommodation/01/0021.jpg",
          "description": "Bacon ipsum dolor amet beef ribs pork loin pastrami flank tenderloin biltong."
        },
        {
          "id": "f04bdbcb-f028-4339-b0a6-4375be7c3a60",
          "source": "https://web.codans.com.br/airbnb/img/accommodation/01/0022.jpg",
          "description": "Bacon ipsum dolor amet pork loin tenderloin pastrami, kevin chislic cow rump doner."
        },
        {
          "id": "34353d12-8107-4129-85c1-1a50efad0111",
          "source": "https://web.codans.com.br/airbnb/img/accommodation/01/0023.jpg",
          "description": "Bacon ipsum dolor amet tongue kielbasa ham, swine filet mignon sausage tenderloin pork loin pig doner chuck venison bacon jowl brisket."
        },
        {
          "id": "8c2d50f9-dc90-4c28-972d-290e4e1b0a2a",
          "source": "https://web.codans.com.br/airbnb/img/accommodation/01/0024.jpg",
          "description": "Bacon ipsum dolor amet turkey shoulder turducken shankle bresaola."
        },
        {
          "id": "eee74611-f751-45f1-93f4-e0573c980207",
          "source": "https://web.codans.com.br/airbnb/img/accommodation/01/0025.jpg",
          "description": "Bacon ipsum dolor amet sirloin pastrami short loin sausage doner shoulder."
        },
        {
          "id": "b068d7ea-535a-4e87-a143-e3ba9dde0a5b",
          "source": "https://web.codans.com.br/airbnb/img/accommodation/01/0026.jpg",
          "description": "Bacon ipsum dolor amet tail pork chop hamburger, kielbasa drumstick salami chicken pastrami jerky."
        },
        {
          "id": "ec245953-1942-4eea-9efb-e3f7512cda80",
          "source": "https://web.codans.com.br/airbnb/img/accommodation/01/0027.jpg",
          "description": "Bacon ipsum dolor amet ribeye venison meatloaf bacon t-bone, drumstick swine frankfurter pork filet mignon shankle chuck alcatra ham kevin."
        },
        {
          "id": "c80c00eb-0b53-4bcb-8af9-0c2057a85931",
          "source": "https://web.codans.com.br/airbnb/img/accommodation/01/0028.jpg",
          "description": "Bacon ipsum dolor amet pastrami swine boudin burgdoggen tail, bacon meatball strip steak beef porchetta corned beef shank rump ham shankle."
        }
      ]
    },
    {
      "number": 2,
      "date": "15 - 20 de jan",
      "host": "Carlos",
      "id": "2c9bac43-c6d5-4a17-8d2f-4492d909c9c6",
      "title": "Parque do memorial com vista incrível para a natureza",
      "slug": "memorial-de-copacabana-brasil",
      "location": {
        "description": "Memorial de Copacabana, Brasil",
        "city": "Rio de Janeiro",
        "state": "Rio de Janeiro",
        "country": "Brasil"
      },
      "hasBadge": true,
      "price": 300,
      "rating": 4.7,
      "testimonials": [
        {
          "id": "560b7417-4280-4afc-ae1d-9159934fde2a",
          "name": "Eufrásio",
          "image": "https://web.codans.com.br/airbnb/img/feedback/560b7417-4280-4afc-ae1d-9159934fde2a.jpg",
          "comment": "Bacon ipsum dolor amet tenderloin swine t-bone flank.",
          "rating": 5,
          "customerTime": 5,
          "createdAt": 7,
          "stayedAt": 2
        },
        {
          "id": "63901507-1bf2-4e49-8798-eeaf2f4fc0a1",
          "name": "Raquélen",
          "image": "https://web.codans.com.br/airbnb/img/feedback/63901507-1bf2-4e49-8798-eeaf2f4fc0a1.jpg",
          "comment": "Bacon ipsum dolor amet tenderloin pastrami brisket bresaola, ham burgdoggen chicken shankle swine strip steak venison frankfurter.",
          "rating": 5,
          "customerTime": 2,
          "createdAt": 7,
          "stayedAt": 8
        },
        {
          "id": "df3745f0-175e-4831-9ac7-b94ae7e76c1f",
          "name": "Cristina",
          "image": "https://web.codans.com.br/airbnb/img/feedback/df3745f0-175e-4831-9ac7-b94ae7e76c1f.jpg",
          "comment": "Bacon ipsum dolor amet strip steak pork belly spare ribs, bacon tenderloin sausage cow.",
          "rating": 3.5,
          "customerTime": 4,
          "createdAt": 5,
          "stayedAt": 2
        }
      ],
      "photos": [
        {
          "id": "f015df3d-d0da-4787-8aa9-95a696686c75",
          "source": "https://web.codans.com.br/airbnb/img/accommodation/02/0029.jpg",
          "description": "Bacon ipsum dolor amet ball tip meatball swine filet mignon, shankle turkey tail rump biltong jerky kevin salami."
        },
        {
          "id": "94970bd2-454a-44dd-bd11-0219e6560a22",
          "source": "https://web.codans.com.br/airbnb/img/accommodation/02/0030.jpg",
          "description": "Bacon ipsum dolor amet pastrami sausage jerky ham hock drumstick pig."
        },
        {
          "id": "e99e89a2-9fd2-406f-8f7a-52967a906c21",
          "source": "https://web.codans.com.br/airbnb/img/accommodation/02/0031.jpg",
          "description": "Bacon ipsum dolor amet leberkas drumstick pork chop, jerky turducken shank meatloaf kielbasa beef brisket short ribs venison shankle."
        },
        {
          "id": "f26e644d-5f0c-488a-ade4-977c7a7fe2df",
          "source": "https://web.codans.com.br/airbnb/img/accommodation/02/0032.jpg",
          "description": "Bacon ipsum dolor amet beef pork shankle, tri-tip pastrami jerky andouille pork belly alcatra ham hock."
        },
        {
          "id": "934d00e6-0075-48b6-a76c-181e3518c4ed",
          "source": "https://web.codans.com.br/airbnb/img/accommodation/02/0033.jpg",
          "description": "Bacon ipsum dolor amet tri-tip cupim chuck rump pork buffalo pork loin kevin jowl sirloin fatback hamburger alcatra tenderloin."
        },
        {
          "id": "48ee043e-14c9-4dd7-b11f-b1fa91412f11",
          "source": "https://web.codans.com.br/airbnb/img/accommodation/02/0034.jpg",
          "description": "Bacon ipsum dolor amet ball tip shankle fatback, meatloaf tail boudin strip steak kevin shoulder pancetta short loin."
        },
        {
          "id": "2d95556a-6d6f-456f-b107-2522b5cc082e",
          "source": "https://web.codans.com.br/airbnb/img/accommodation/02/0035.jpg",
          "description": "Bacon ipsum dolor amet jerky cupim burgdoggen leberkas, tenderloin shoulder chuck ham drumstick frankfurter capicola pork buffalo."
        },
        {
          "id": "f75c3847-0569-4ee1-adbf-088781c3968c",
          "source": "https://web.codans.com.br/airbnb/img/accommodation/02/0036.jpg",
          "description": "Bacon ipsum dolor amet pig porchetta prosciutto tail pork loin biltong landjaeger shoulder sausage."
        },
        {
          "id": "012a07ce-d140-4e73-a109-249bae4f26f0",
          "source": "https://web.codans.com.br/airbnb/img/accommodation/02/0037.jpg",
          "description": "Bacon ipsum dolor amet meatloaf tri-tip salami tail bacon ball tip shank."
        },
        {
          "id": "63da9412-f499-4376-a96f-101464a77d7a",
          "source": "https://web.codans.com.br/airbnb/img/accommodation/02/0038.jpg",
          "description": "Bacon ipsum dolor amet ribeye frankfurter fatback pancetta kielbasa cow buffalo swine pork chop pork beef ribs capicola."
        },
        {
          "id": "5fa21c91-1e99-4d55-8551-77a7165e9a7f",
          "source": "https://web.codans.com.br/airbnb/img/accommodation/02/0039.jpg",
          "description": "Bacon ipsum dolor amet pork tri-tip shoulder turducken venison."
        },
        {
          "id": "4999ff3a-207f-4f24-b708-6988a119cacf",
          "source": "https://web.codans.com.br/airbnb/img/accommodation/02/0040.jpg",
          "description": "Bacon ipsum dolor amet turducken capicola cupim, boudin tail hamburger tri-tip ribeye brisket meatball ham corned beef landjaeger."
        },
        {
          "id": "e2b2b8fb-9bc2-41c7-a58c-f8d399abccca",
          "source": "https://web.codans.com.br/airbnb/img/accommodation/02/0041.jpg",
          "description": "Bacon ipsum dolor amet andouille cow hamburger turducken, chuck meatloaf ground round boudin ham shank porchetta swine t-bone flank tongue."
        },
        {
          "id": "4d2e020d-7ea6-405f-af44-b1e6a2112a47",
          "source": "https://web.codans.com.br/airbnb/img/accommodation/02/0042.jpg",
          "description": "Bacon ipsum dolor amet bresaola pork boudin pork chop, beef ribs ribeye venison."
        },
        {
          "id": "d87c0022-3404-477c-bcd7-eefd06aadf2c",
          "source": "https://web.codans.com.br/airbnb/img/accommodation/02/0043.jpg",
          "description": "Bacon ipsum dolor amet brisket t-bone tri-tip, picanha chicken shank flank biltong short ribs bacon landjaeger andouille boudin shoulder drumstick."
        },
        {
          "id": "bc168c1f-69d2-454b-9c97-33fff2a27bb5",
          "source": "https://web.codans.com.br/airbnb/img/accommodation/02/0044.jpg",
          "description": "Bacon ipsum dolor amet flank biltong kevin burgdoggen pork hamburger."
        },
        {
          "id": "059aa13e-4f33-4c48-8d34-35d2db7512ce",
          "source": "https://web.codans.com.br/airbnb/img/accommodation/02/0045.jpg",
          "description": "Bacon ipsum dolor amet doner pastrami bacon flank tri-tip burgdoggen drumstick chislic short loin corned beef prosciutto strip steak."
        },
        {
          "id": "7c600229-c524-46eb-a417-90eb35e8158b",
          "source": "https://web.codans.com.br/airbnb/img/accommodation/02/0046.jpg",
          "description": "Bacon ipsum dolor amet tail corned beef landjaeger biltong, jerky picanha drumstick shank cupim sirloin ribeye ball tip."
        },
        {
          "id": "ef3bfb74-a025-45bc-86f9-cddfbc8fff65",
          "source": "https://web.codans.com.br/airbnb/img/accommodation/02/0047.jpg",
          "description": "Bacon ipsum dolor amet beef ribs flank landjaeger, venison turkey chislic cow pork belly frankfurter ham hock pork loin t-bone rump."
        },
        {
          "id": "2aea7c20-16e3-43e9-80c3-f08d73fecf56",
          "source": "https://web.codans.com.br/airbnb/img/accommodation/02/0048.jpg",
          "description": "Bacon ipsum dolor amet t-bone boudin pork leberkas, ribeye sirloin salami landjaeger."
        },
        {
          "id": "175f5252-a125-4167-ba7b-25a2d4c4dac0",
          "source": "https://web.codans.com.br/airbnb/img/accommodation/02/0049.jpg",
          "description": "Bacon ipsum dolor amet pancetta pork turkey, prosciutto shankle shank bresaola frankfurter drumstick porchetta shoulder."
        },
        {
          "id": "6e3f34b7-a356-4ff1-8cea-d4e33d307ea4",
          "source": "https://web.codans.com.br/airbnb/img/accommodation/02/0050.jpg",
          "description": "Bacon ipsum dolor amet kevin chislic chicken corned beef tri-tip, biltong ground round filet mignon bacon t-bone flank shankle tongue brisket."
        },
        {
          "id": "546793eb-e74b-44c2-a954-11b19962e7cb",
          "source": "https://web.codans.com.br/airbnb/img/accommodation/02/0051.jpg",
          "description": "Bacon ipsum dolor amet ribeye biltong ham, pork chop cow pancetta salami doner beef alcatra shank corned beef turducken."
        },
        {
          "id": "c87990ea-3425-4a3f-86e9-db17910f53e3",
          "source": "https://web.codans.com.br/airbnb/img/accommodation/02/0052.jpg",
          "description": "Bacon ipsum dolor amet kielbasa short ribs landjaeger sausage cupim filet mignon turkey drumstick ground round."
        },
        {
          "id": "05317d50-f0d7-4c41-b00b-6a2009f308fe",
          "source": "https://web.codans.com.br/airbnb/img/accommodation/02/0053.jpg",
          "description": "Bacon ipsum dolor amet venison cow meatloaf beef cupim bacon pig chicken pork chop."
        },
        {
          "id": "055284ef-800a-4e51-8562-54228d3bdcae",
          "source": "https://web.codans.com.br/airbnb/img/accommodation/02/0054.jpg",
          "description": "Bacon ipsum dolor amet tri-tip pork chop frankfurter t-bone pork shoulder pancetta landjaeger short ribs."
        },
        {
          "id": "8e846b65-5eec-4bfc-a1d5-2957b65e98dd",
          "source": "https://web.codans.com.br/airbnb/img/accommodation/02/0055.jpg",
          "description": "Bacon ipsum dolor amet pork loin venison bacon, sausage picanha frankfurter salami shoulder prosciutto fatback chislic ham hock turducken tenderloin."
        },
        {
          "id": "1a965774-9dd3-4d3d-bad3-a533d5edc8fc",
          "source": "https://web.codans.com.br/airbnb/img/accommodation/02/0056.jpg",
          "description": "Bacon ipsum dolor amet short loin andouille pork filet mignon tenderloin, kevin ball tip ham corned beef short ribs biltong."
        },
        {
          "id": "bf844a9c-1e09-4276-b0fc-3b7cdf0beaf3",
          "source": "https://web.codans.com.br/airbnb/img/accommodation/02/0057.jpg",
          "description": "Bacon ipsum dolor amet strip steak hamburger beef ribs short loin venison."
        }
      ]
    },
    {
      "number": 3,
      "date": "22 - 27 de jan",
      "host": "Ana",
      "id": "e9807385-6ffd-49e8-ad67-746435402c70",
      "title": "Campo aberto para acampamento ao ar livre",
      "slug": "campo-celeste-brasil",
      "location": {
        "description": "Campo Celeste, Brasil",
        "city": "São Paulo",
        "state": "São Paulo",
        "country": "Brasil"
      },
      "hasBadge": true,
      "price": 150,
      "rating": 4.3,
      "testimonials": [
        {
          "id": "d2eef1e5-1b9f-4c88-bb83-89c3039f3e74",
          "name": "Loeci",
          "image": "https://web.codans.com.br/airbnb/img/feedback/d2eef1e5-1b9f-4c88-bb83-89c3039f3e74.jpg",
          "comment": "Bacon ipsum dolor amet kielbasa landjaeger bacon shoulder.",
          "rating": 5,
          "customerTime": 6,
          "createdAt": 4,
          "stayedAt": 2
        },
        {
          "id": "8ad8a15f-d374-4178-8f2d-13562e15aef0",
          "name": "Palmira",
          "image": "https://web.codans.com.br/airbnb/img/feedback/8ad8a15f-d374-4178-8f2d-13562e15aef0.jpg",
          "comment": "Bacon ipsum dolor amet kevin strip steak beef ball tip beef ribs biltong landjaeger.",
          "rating": 5,
          "customerTime": 5,
          "createdAt": 7,
          "stayedAt": 8
        },
        {
          "id": "92b6f8ca-e1ff-4ba7-8559-a1121d54befc",
          "name": "Telo",
          "image": "https://web.codans.com.br/airbnb/img/feedback/92b6f8ca-e1ff-4ba7-8559-a1121d54befc.jpg",
          "comment": "Bacon ipsum dolor amet spare ribs jerky hamburger, tail pork andouille porchetta beef tenderloin ribeye flank shankle tongue landjaeger chuck.",
          "rating": 4,
          "customerTime": 6,
          "createdAt": 2,
          "stayedAt": 4
        }
      ],
      "photos": [
        {
          "id": "5619a8b7-dcb1-44f5-b377-6f8989e2689e",
          "source": "https://web.codans.com.br/airbnb/img/accommodation/03/0058.jpg",
          "description": "Bacon ipsum dolor amet chuck porchetta drumstick burgdoggen shankle, bacon meatloaf filet mignon venison leberkas brisket turkey biltong shoulder pork chop."
        },
        {
          "id": "3c1cd04f-b5db-4712-a8f3-369847037eaf",
          "source": "https://web.codans.com.br/airbnb/img/accommodation/03/0059.jpg",
          "description": "Bacon ipsum dolor amet sausage corned beef turkey spare ribs capicola jerky shank, flank meatloaf beef tongue."
        },
        {
          "id": "9493ba0a-58bd-47c2-968b-94a5cacbda7f",
          "source": "https://web.codans.com.br/airbnb/img/accommodation/03/0060.jpg",
          "description": "Bacon ipsum dolor amet flank short loin ball tip rump."
        },
        {
          "id": "eb49dba5-bd56-4724-9002-ce1697b7f6e7",
          "source": "https://web.codans.com.br/airbnb/img/accommodation/03/0061.jpg",
          "description": "Bacon ipsum dolor amet rump tri-tip pig fatback prosciutto bacon ball tip."
        },
        {
          "id": "d4b88f23-b407-447c-9e11-5694027b1a2e",
          "source": "https://web.codans.com.br/airbnb/img/accommodation/03/0062.jpg",
          "description": "Bacon ipsum dolor amet burgdoggen venison tongue fatback."
        },
        {
          "id": "e675a5b8-067d-4c04-8707-ff0f4a7e2ccb",
          "source": "https://web.codans.com.br/airbnb/img/accommodation/03/0063.jpg",
          "description": "Bacon ipsum dolor amet burgdoggen rump jerky capicola buffalo tongue ribeye."
        },
        {
          "id": "3e9bebfd-1c91-48fd-9a9f-abd7dea1cb87",
          "source": "https://web.codans.com.br/airbnb/img/accommodation/03/0064.jpg",
          "description": "Bacon ipsum dolor amet jowl meatloaf picanha strip steak tri-tip ground round meatball chicken."
        },
        {
          "id": "8bcd4b7d-85d5-42bc-bdad-52e9741d18ed",
          "source": "https://web.codans.com.br/airbnb/img/accommodation/03/0065.jpg",
          "description": "Bacon ipsum dolor amet bresaola porchetta fatback, landjaeger pastrami shank shankle salami jowl beef ribs turkey."
        },
        {
          "id": "d73d5c53-15e3-46a1-adec-9dd7868cab37",
          "source": "https://web.codans.com.br/airbnb/img/accommodation/03/0066.jpg",
          "description": "Bacon ipsum dolor amet tenderloin frankfurter doner boudin, jowl rump bresaola shank."
        },
        {
          "id": "795c6101-5de9-41af-92dc-9789e5bc62d5",
          "source": "https://web.codans.com.br/airbnb/img/accommodation/03/0067.jpg",
          "description": "Bacon ipsum dolor amet landjaeger filet mignon tenderloin chuck turducken alcatra pork loin tongue burgdoggen strip steak biltong."
        },
        {
          "id": "771304ae-f4a2-4855-8234-29e38824afc6",
          "source": "https://web.codans.com.br/airbnb/img/accommodation/03/0068.jpg",
          "description": "Bacon ipsum dolor amet shankle rump tri-tip, brisket jowl shoulder doner frankfurter capicola strip steak boudin burgdoggen sausage."
        },
        {
          "id": "86b5011f-1a7e-4ba5-9d86-5a34cabfd46c",
          "source": "https://web.codans.com.br/airbnb/img/accommodation/03/0069.jpg",
          "description": "Bacon ipsum dolor amet venison ball tip shankle tail chuck fatback turkey salami tenderloin doner pancetta flank filet mignon cupim."
        },
        {
          "id": "d70697c1-e94d-44a4-ab45-41d99052840a",
          "source": "https://web.codans.com.br/airbnb/img/accommodation/03/0070.jpg",
          "description": "Bacon ipsum dolor amet meatloaf ham hock beef ribs, flank kevin rump prosciutto hamburger pastrami swine alcatra drumstick picanha jerky bresaola."
        },
        {
          "id": "7465e385-3d77-4973-b353-b2420ae54f08",
          "source": "https://web.codans.com.br/airbnb/img/accommodation/03/0071.jpg",
          "description": "Bacon ipsum dolor amet pork belly t-bone biltong, cupim chuck turkey ground round fatback drumstick brisket swine beef pork loin meatloaf ball tip."
        },
        {
          "id": "8ceb7e05-da5d-4025-8876-a0b462e36142",
          "source": "https://web.codans.com.br/airbnb/img/accommodation/03/0072.jpg",
          "description": "Bacon ipsum dolor amet boudin tail doner, strip steak shankle shoulder capicola swine bresaola ham hock andouille prosciutto chuck."
        },
        {
          "id": "a3a56a0e-eaec-47d7-bd88-f25f9daf8957",
          "source": "https://web.codans.com.br/airbnb/img/accommodation/03/0073.jpg",
          "description": "Bacon ipsum dolor amet venison cupim pork loin jerky pig buffalo rump, kielbasa tri-tip ribeye."
        },
        {
          "id": "941440af-1219-4548-9235-c23ffe1e9094",
          "source": "https://web.codans.com.br/airbnb/img/accommodation/03/0074.jpg",
          "description": "Bacon ipsum dolor amet flank shankle tri-tip leberkas sirloin ground round."
        },
        {
          "id": "13e7d101-6106-43fe-93aa-39feccdfa67b",
          "source": "https://web.codans.com.br/airbnb/img/accommodation/03/0075.jpg",
          "description": "Bacon ipsum dolor amet pig jerky jowl prosciutto shank ham burgdoggen boudin ham hock drumstick turducken frankfurter pancetta chislic."
        },
        {
          "id": "42c69f31-ddb5-42a1-9686-74eac95815b0",
          "source": "https://web.codans.com.br/airbnb/img/accommodation/03/0076.jpg",
          "description": "Bacon ipsum dolor amet ground round turducken bresaola filet mignon, swine sausage beef ribs."
        },
        {
          "id": "bee89629-0379-49b7-bf27-7fb491cf10df",
          "source": "https://web.codans.com.br/airbnb/img/accommodation/03/0077.jpg",
          "description": "Bacon ipsum dolor amet boudin filet mignon meatloaf chislic venison tail leberkas."
        },
        {
          "id": "e8072217-d4b5-4fde-89ef-7c7d924dbc44",
          "source": "https://web.codans.com.br/airbnb/img/accommodation/03/0078.jpg",
          "description": "Bacon ipsum dolor amet meatloaf hamburger short ribs, chislic sausage ground round chicken."
        },
        {
          "id": "55e2aee6-a5bc-437f-92d8-0e9f3fdbd2ea",
          "source": "https://web.codans.com.br/airbnb/img/accommodation/03/0079.jpg",
          "description": "Bacon ipsum dolor amet kielbasa chuck short ribs, meatball pig strip steak jerky leberkas porchetta."
        },
        {
          "id": "52052acd-efa1-4eef-be00-564a2bb54c50",
          "source": "https://web.codans.com.br/airbnb/img/accommodation/03/0080.jpg",
          "description": "Bacon ipsum dolor amet drumstick chicken ground round sirloin, alcatra pork chop beef chuck pig leberkas."
        },
        {
          "id": "2a0056f7-796c-4e57-9b26-1df6fec58505",
          "source": "https://web.codans.com.br/airbnb/img/accommodation/03/0081.jpg",
          "description": "Bacon ipsum dolor amet meatloaf corned beef short loin, alcatra drumstick landjaeger chicken biltong bacon spare ribs beef leberkas shank kielbasa porchetta."
        },
        {
          "id": "9efa08ac-6b00-4ee5-89dd-34aaf5eb7442",
          "source": "https://web.codans.com.br/airbnb/img/accommodation/03/0082.jpg",
          "description": "Bacon ipsum dolor amet tongue short ribs brisket, tenderloin cow sirloin pig burgdoggen shankle beef ribs alcatra leberkas chuck."
        },
        {
          "id": "231ac6e0-aca2-4981-bc54-e2de33b748fe",
          "source": "https://web.codans.com.br/airbnb/img/accommodation/03/0083.jpg",
          "description": "Bacon ipsum dolor amet pastrami venison ground round, short ribs bacon pork belly pork loin sirloin shankle ribeye brisket ham."
        },
        {
          "id": "b48c9785-f397-4cea-9fe7-60d5838d241c",
          "source": "https://web.codans.com.br/airbnb/img/accommodation/03/0084.jpg",
          "description": "Bacon ipsum dolor amet shank alcatra venison chicken landjaeger ham hock turducken pancetta flank ham bacon kielbasa cow doner."
        },
        {
          "id": "357426f2-bd2a-492b-bffa-3ba6a7732adf",
          "source": "https://web.codans.com.br/airbnb/img/accommodation/03/0085.jpg",
          "description": "Bacon ipsum dolor amet leberkas bacon corned beef shoulder drumstick andouille hamburger, shankle ball tip salami."
        }
      ]
    }
]

const Acomodacao = () => {
    return (
        <section className='py-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {acomodacoes.map((acomodacao, indice) => (
                <div key={indice}>
                    <Image 
                    className='w-full aspect-square object-cover rounded-xl'
                    src={acomodacao.photos[0].source}
                    alt={acomodacao.photos[0].description}
                    width={300}
                    height={300}></Image>
                </div>
            ))}
        </section>
    )
}

export default Acomodacao