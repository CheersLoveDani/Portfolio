
import { Tooltip } from '@chakra-ui/tooltip'
import { useState } from 'react'



function TouchTooltip(props) {
  const [isLabelOpen, setIsLabelOpen] = useState(false)

  return (
    <Tooltip label={props.label} placement={props.placement} closeOnClick={false} isOpen={isLabelOpen}>
      <span
        onMouseEnter={() => setIsLabelOpen(true)}
        onMouseLeave={() => setIsLabelOpen(false)}
        onClick={() => setIsLabelOpen(!isLabelOpen)}
      >
        {props.children}
      </span>
    </Tooltip>

  )
}

export default TouchTooltip