import Select, { Option, SelectProps } from 'rc-select';
import DownArrow from '../../assets/DownArrow';
import '../../MyCSS.css'
import classnames from 'classnames'

interface ExtendedSelectProps extends SelectProps<string> {
  option?: string[]
  defaultValue?: string
  label?: string
  error?: string
  touched?: boolean
  className?: string
  from?: string
  showSearch?: boolean
  affixIcon?: React.ReactNode
}

const Dropdown: React.FC<ExtendedSelectProps> = (props) => {
  const {
      option,
      defaultValue,
      label,
      error,
      touched,
      className,
      affixIcon,
      showSearch = false,
  } = props
  return (
      <div
          className={classnames(className, 'select-dropdown', {
              'has-error': error && touched,
          })}
      >
          {label && <div className="label">{label}</div>}
          <div className="list-item-wrapper">
              <Select
                  defaultValue={defaultValue}
                  showSearch={showSearch}
                  notFoundContent={null}
                  defaultOpen={false}
                  suffixIcon={<DownArrow />}
                  className={classnames({ 'select-error': error && touched })}
                  {...props}
              >
                  {option?.map((item) => (
                      <Option key={item} value={item}>
                          {item}
                      </Option>
                  ))}
              </Select>
              {affixIcon && <div className="affix-icon">{affixIcon}</div>}
          </div>
      </div>
  )
}

export default Dropdown
