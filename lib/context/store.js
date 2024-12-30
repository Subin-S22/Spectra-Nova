'use client'

import { useState } from "react";

export default function useStore() {
  const [currentPage, setCurrentPage] = useState('/home');

  const state = {
    currentPage,
  }

  const actions = {
    setCurrentPage
  }

  return { state, actions }

}
