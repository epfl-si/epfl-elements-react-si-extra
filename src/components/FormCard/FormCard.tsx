import {Button} from "../Button/Button";
import './formCard.css'
import * as CSS from 'csstype';
// @ts-expect-error epfl-element does not provide types
import featherIcons from 'epfl-elements/dist/icons/feather-sprite.svg';

interface Style extends CSS.Properties, CSS.PropertiesHyphen {}

interface FormCardProps {
  title?: string;
  children?: React.ReactNode;
  icon?: string;
  onClickIcon?: () => void;
  onClickItem?: () => void;
  style?: Style;
  className?: string;
  keyValue: string;
  tooltip?: string;
}

/**
 * A card  with title, children for the body and a button for an action
 */
export const FormCard = ({
  title,
  children,
  icon,
  onClickIcon,
  onClickItem,
  style,
  className,
  keyValue,
  tooltip
}: FormCardProps) => {

  let leftDivStyle = "flex-fill";
  if(icon) {
    leftDivStyle = "form-flex-item-body";
  }

  return (
      <div className={"form-card ".concat(className ? className : '')} style={style} key={keyValue}>
          <div className={leftDivStyle} onClick={onClickItem}>
            {title ? <h5 className="card-text">{title}</h5> : (<></>)}
            {children}
          </div>
          {icon ? <div className="form-flex-item-icon">
            <Button size="icon"
                    iconName={featherIcons+icon}
                    onClick={onClickIcon}
                    title={tooltip}
                    key={keyValue.concat("button")}
                    id={keyValue.concat("button")}/>
          </div> : <></>}
      </div>
  );
};
