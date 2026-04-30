export const trains = [
  {
    id: 1,
    number: "705К",
    route: { from: "Kyiv-Pasazhyrskyi", to: "Lviv" },
    departure: "2026-04-22T06:00:00",
    arrival: "2026-04-22T11:30:00",
    duration: "5h 30m",
    price: 450,
    wagons: [
      { id: 1, type: "Second Class", seats: Array.from({ length: 40 }, (_, i) => ({ id: i + 1, number: i + 1, status: Math.random() > 0.8 ? 'booked' : 'free' })) },
      { id: 2, type: "Second Class", seats: Array.from({ length: 40 }, (_, i) => ({ id: i + 41, number: i + 1, status: Math.random() > 0.8 ? 'booked' : 'free' })) },
      { id: 3, type: "First Class", seats: Array.from({ length: 20 }, (_, i) => ({ id: i + 81, number: i + 1, status: Math.random() > 0.8 ? 'booked' : 'free' })) }
    ]
  },
  {
    id: 2,
    number: "106К",
    route: { from: "Kyiv-Pasazhyrskyi", to: "Odesa" },
    departure: "2026-04-22T08:15:00",
    arrival: "2026-04-22T15:20:00",
    duration: "7h 05m",
    price: 520,
    wagons: [
      { id: 1, type: "Kupe", seats: Array.from({ length: 36 }, (_, i) => ({ id: i + 1, number: i + 1, status: Math.random() > 0.7 ? 'booked' : 'free' })) },
      { id: 2, type: "Lux", seats: Array.from({ length: 18 }, (_, i) => ({ id: i + 37, number: i + 1, status: Math.random() > 0.7 ? 'booked' : 'free' })) }
    ]
  },
  {
    id: 3,
    number: "043К",
    route: { from: "Lviv", to: "Ivano-Frankivsk" },
    departure: "2026-04-22T10:45:00",
    arrival: "2026-04-22T13:10:00",
    duration: "2h 25m",
    price: 280,
    wagons: [
      { id: 1, type: "Platskart", seats: Array.from({ length: 54 }, (_, i) => ({ id: i + 1, number: i + 1, status: Math.random() > 0.5 ? 'booked' : 'free' })) }
    ]
  },
  {
    id: 4,
    number: "017О",
    route: { from: "Kharkiv-Pas", to: "Kyiv-Pasazhyrskyi" },
    departure: "2026-04-22T14:30:00",
    arrival: "2026-04-22T20:15:00",
    duration: "5h 45m",
    price: 390,
    wagons: [
      { id: 1, type: "Kupe", seats: Array.from({ length: 36 }, (_, i) => ({ id: i + 1, number: i + 1, status: 'free' })) }
    ]
  },
  {
    id: 5,
    number: "743К",
    route: { from: "Dnipro-Holovnyi", to: "Kyiv-Pasazhyrskyi" },
    departure: "2026-04-22T17:20:00",
    arrival: "2026-04-22T23:45:00",
    duration: "6h 25m",
    price: 480,
    wagons: [
      { id: 1, type: "Second Class", seats: Array.from({ length: 40 }, (_, i) => ({ id: i + 1, number: i + 1, status: 'free' })) }
    ]
  }
];
