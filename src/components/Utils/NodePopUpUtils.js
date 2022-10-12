export const showColorField = (agamaData) => {
  if (
    agamaData.type === 'Agama-start-Flow' ||
    agamaData.type === 'Agama-quit-Node' ||
    agamaData.type === 'Agama-end-Flow'
  ) {
    return false
  }
  return true
}

export const showDescriptionField = (agamaData) => {
  if (
    agamaData.type === 'Agama-start-Flow' ||
    agamaData.type === 'Agama-end-Flow'
  ) {
    return false
  }
  return true
}

export const showFlowNameField = (agamaData) => {
  if (agamaData.type !== 'Agama-start-Flow') {
    return false
  }
  return true
}

export const showBasepathField = (agamaData) => {
  if (agamaData.type !== 'Agama-start-Flow') {
    return false
  }
  return true
}

export const showFlowFileNameField = (agamaData) => {
  if (agamaData.type !== 'Agama-trigger-Node') {
    return false
  }
  return true
}

export const showAssignedVariableNameField = (agamaData) => {
  if (
    agamaData.type === 'Agama-trigger-Node' ||
    agamaData.type === 'Agama-rrf-Node' ||
    agamaData.type === 'Agama-call-Node'
  ) {
    return true
  }
  return false
}

export const showJavaMethodNameField = (agamaData) => {
  if (agamaData.type !== 'Agama-call-Node') {
    return false
  }
  return true
}
export const showParamsField = (agamaData) => {
  if (
    agamaData.type === 'Agama-call-Node' ||
    agamaData.type === 'Agama-rrf-Node'
  ) {
    return true
  }
  return false
}

export const showTemplateNameField = (agamaData) => {
  if (agamaData.type !== 'Agama-rrf-Node') {
    return false
  }
  return true
}

export const showLogMessageField = (agamaData) => {
  if (agamaData.type !== 'Agama-log-Node') {
    return false
  }
  return true
}
export const showMaxNumberOfIterationsField = (agamaData) => {
  if (agamaData.type !== 'Agama-repeat-Node') {
    return false
  }
  return true
}
export const showRepeatBlockField = (agamaData) => {
  if (agamaData.type !== 'Agama-repeat-Node') {
    return false
  }
  return true
}
export const showQuitConditionField = (agamaData) => {
  if (agamaData.type !== 'Agama-quit-Node') {
    return false
  }
  return true
}
export const showRedirectLocationField = (agamaData) => {
  if (agamaData.type !== 'Agama-rfac-Node') {
    return false
  }
  return true
}

export const showWhenVariableField = (agamaData) => {
  if (agamaData.type !== 'Agama-when-Node') {
    return false
  }
  return true
}

export const showWhenConditionField = (agamaData) => {
  if (agamaData.type !== 'Agama-when-Node') {
    return false
  }
  return true
}

export const showWhenValueField = (agamaData) => {
  if (agamaData.type !== 'Agama-when-Node') {
    return false
  }
  return true
}