import { createContext, useContext, useMemo, useState } from 'react'

const BooktourSearchContext = createContext(null)

export function BooktourSearchProvider({ children }) {
  const [activeField, setActiveField] = useState('where')
  const [engaged, setEngaged] = useState(false)
  const [uiHost, setUiHost] = useState('hero')
  const [whereQuery, setWhereQuery] = useState('')
  const [selectedDestination, setSelectedDestination] = useState(null)
  const [whereOpen, setWhereOpen] = useState(false)
  const [whoOpen, setWhoOpen] = useState(false)
  const [datesOpen, setDatesOpen] = useState(false)
  const [dateSelecting, setDateSelecting] = useState('check-in')
  const [checkIn, setCheckIn] = useState(null)
  const [checkOut, setCheckOut] = useState(null)
  const [checkInFlex, setCheckInFlex] = useState('exact')
  const [checkOutFlex, setCheckOutFlex] = useState('exact')
  const [adults, setAdults] = useState(0)
  const [pets, setPets] = useState(0)
  const [childrenAges, setChildrenAges] = useState([])

  const closePanels = () => {
    setWhereOpen(false)
    setWhoOpen(false)
    setDatesOpen(false)
    setWhereQuery('')
  }

  const dismiss = () => {
    setEngaged(false)
    closePanels()
    setActiveField('where')
  }

  const parkPanels = () => {
    setEngaged(false)
    closePanels()
  }

  const selectField = (fieldId, host) => {
    setUiHost(host)
    setEngaged(true)
    setActiveField(fieldId)

    if (fieldId === 'where') {
      setWhereOpen(true)
      setWhoOpen(false)
      setDatesOpen(false)
      setWhereQuery('')
    } else if (fieldId === 'who') {
      setWhoOpen(true)
      setWhereOpen(false)
      setDatesOpen(false)
      setWhereQuery('')
    } else if (fieldId === 'check-in' || fieldId === 'check-out') {
      setDatesOpen(true)
      setWhereOpen(false)
      setWhoOpen(false)
      setWhereQuery('')
      setDateSelecting(fieldId)
    } else {
      closePanels()
    }
  }

  const chooseDestination = (destination) => {
    setSelectedDestination(destination)
    setWhereQuery('')
    setWhereOpen(false)
    setWhoOpen(false)
    setDatesOpen(true)
    setEngaged(true)
    setActiveField('check-in')
    setDateSelecting('check-in')
  }

  const handleCheckInChange = (date) => {
    setCheckIn(date)
  }

  const handleCheckOutChange = (date) => {
    setCheckOut(date)
    if (date) {
      setDatesOpen(false)
      setWhoOpen(true)
      setActiveField('who')
    }
  }

  const handleDateSelectingChange = (next) => {
    setDateSelecting(next)
    setActiveField(next)
  }

  const handleFlexTagChange = (tagId) => {
    if (dateSelecting === 'check-out') {
      setCheckOutFlex(tagId)
    } else {
      setCheckInFlex(tagId)
    }
  }

  const value = useMemo(
    () => ({
      activeField,
      engaged,
      uiHost,
      setUiHost,
      whereQuery,
      setWhereQuery,
      selectedDestination,
      whereOpen,
      whoOpen,
      datesOpen,
      dateSelecting,
      checkIn,
      checkOut,
      checkInFlex,
      checkOutFlex,
      adults,
      setAdults,
      pets,
      setPets,
      childrenAges,
      setChildrenAges,
      selectField,
      dismiss,
      closePanels,
      parkPanels,
      chooseDestination,
      handleCheckInChange,
      handleCheckOutChange,
      handleDateSelectingChange,
      handleFlexTagChange,
    }),
    [
      activeField,
      engaged,
      uiHost,
      whereQuery,
      selectedDestination,
      whereOpen,
      whoOpen,
      datesOpen,
      dateSelecting,
      checkIn,
      checkOut,
      checkInFlex,
      checkOutFlex,
      adults,
      pets,
      childrenAges,
    ],
  )

  return (
    <BooktourSearchContext.Provider value={value}>
      {children}
    </BooktourSearchContext.Provider>
  )
}

export function useBooktourSearch() {
  const ctx = useContext(BooktourSearchContext)
  if (!ctx) {
    throw new Error('useBooktourSearch must be used within BooktourSearchProvider')
  }
  return ctx
}
