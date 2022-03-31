import { icons } from '../../utils/assetsLoader';

export default function Error (props) {
  return (
    <div className="flex pl-1.5 items-center">
      <img alt='warning' src={icons.warning} />
      <small className="pl-1 text-red-500 text-[10px] self-start">{props.children}</small>
    </div>
  );
}
