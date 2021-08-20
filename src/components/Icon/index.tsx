import * as React from 'react';

import {block as bem} from 'bem-cn';

export const IconMapSVG = require('components/Icon/svg/icon-map-low.svg').default;
export const IconCrossSVG = require('components/Icon/svg/icon-cross.svg').default;
export const IconSquirrelSVG = require('components/Icon/svg/icon-squirrel-low.svg').default;

const block = bem('icon');

interface Icon {
  viewBox: string;
  id: string;
}

interface IconProps {
  fill?: string;
  ref?: (node: SVGElement) => void;
}

export function Icon(icon: Icon, props: IconProps = {}) {
  if (!icon || !icon.id) {
    return '';
  }

  const locals = {
    fill: props.fill,
  };

  const id = icon.id.replace('-usage', '');

  return (
      <svg className={block()} viewBox={icon.viewBox} ref={props.ref}>
        <use xlinkHref={`#${id}`} {...locals}/>
      </svg>
  );
}

export function IconMap(props?: IconProps) {
  return Icon(IconMapSVG, props);
}

export function IconSquirrel(props?: IconProps) {
  return Icon(IconSquirrelSVG, props);
}

export function IconCross(props?: IconProps) {
  return Icon(IconCrossSVG, props);
}
