import classNames from "classnames"
import { useRef } from "react"
import { InputCheckboxComponent } from "./types"

export const InputCheckbox: InputCheckboxComponent = ({ id, checked = false, disabled, onChange }) => {
  const { current: inputId } = useRef(`RampInputCheckbox-${id}`)

  return (
    <div className="RampInputCheckbox--container" data-testid={inputId}>
      <label
  htmlFor={inputId}n // i added this to connect the label element the checkBox input to fix the click function
  className={classNames("RampInputCheckbox--label", {
    "RampInputCheckbox--label-checked": checked,
    "RampInputCheckbox--label-disabled": disabled,
  })}
/>
      <input
        id={inputId}
        type="checkbox"
        className="RampInputCheckbox--input"
        checked={checked}
        disabled={disabled}
        onChange={() => onChange(!checked)}
      />
    </div>
  )
}
