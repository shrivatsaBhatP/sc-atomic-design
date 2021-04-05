import { Shapes } from '../components/organisms/UserBlock/defaultValue';

export type optionElement = {
  id: number;
  value: Shapes | number;
  label: string;
};

export type innerOption = {
  id: number;
  label: string;
  placeholder: string;
};
export type optionElement2 = {
  rectangle: innerOption[];
  circle: innerOption[];
  square: innerOption[];
  ellipse: innerOption[];
};

export type optionsBody = optionElement[] | optionElement2;
// [
// { id: 1; value: Shapes.RECTANGLE; label: 'Rectangle' },
// { id: 2; value: Shapes.CIRCLE; label: 'Circle' },
// { id: 3; value: Shapes.SQUARE; label: 'Square' },
// { id: 4; value: Shapes.ELLIPSE; label: 'Ellipse' }
// ];
