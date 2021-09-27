import { useState } from 'react'

export default function useTableOrForm() {
  const [visible, setVisible] = useState<'table' | 'form'>(`table`)
  return {
    tableVisible: visible === `table`,
    formVisible: visible === `form`,
    exibirTable: () => setVisible(`table`),
    exibirForm: () => setVisible(`form`)
  }
}
