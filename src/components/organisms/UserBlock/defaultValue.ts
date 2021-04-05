export enum Status {
  IDLE = 'idle',
  LOADING = 'loading',
  ERROR = 'error',
  RESET = 'reset',
  ACTIVE = 'active',
}

export enum Steps {
  STEP1 = 'step1',
  STEP2 = 'step2',
  STEP3 = 'step3',
}

export enum Shapes {
  RECTANGLE = 'rectangle',
  SQUARE = 'square',
  CIRCLE = 'circle',
  ELLIPSE = 'ellipse',
}

export const stepState = {
  step1: {
    id: 11,
    stepNumber: 1,
    stepName: 'Select your shape',
    submitLabel: 'Go to step 2',
    cancelOption: true,
    description: (type = 'unknown', value: Object) =>
      `Please select the shape that you would like to calculate the area of and press the button "Go to step 2"`,
    body: {
      inputType: 'radio',
      option: [
        { id: 1, value: Shapes.RECTANGLE, label: 'Rectangle' },
        { id: 2, value: Shapes.CIRCLE, label: 'Circle' },
        { id: 3, value: Shapes.SQUARE, label: 'Square' },
        { id: 4, value: Shapes.ELLIPSE, label: 'Ellipse' },
      ],
    },
  },
  step2: {
    id: 12,
    stepNumber: 2,
    stepName: 'Insert your values',
    submitLabel: 'Go to step 3',
    cancelOption: true,
    description: (type = 'unknown', value: Object) =>
      `You have selected a <strong>${type}</strong>, please input the required variables.`,
    body: {
      inputType: 'input',
      option: [
        { id: 1, value: Shapes.RECTANGLE, label: 'Rectangle' },
        { id: 2, value: Shapes.CIRCLE, label: 'Circle' },
        { id: 3, value: Shapes.SQUARE, label: 'Square' },
        { id: 4, value: Shapes.ELLIPSE, label: 'Ellipse' },
      ],
    },
  },
  step3: {
    id: 13,
    stepNumber: 3,
    stepName: 'Your result',
    submitLabel: 'Start over',
    cancelOption: false,
    description: (type = 'unknown', value: any) => {
      let measures = [];
      for (let key in value) {
        measures.push(`${key} of ${value[key]}`);
      }

      return `You have calculated the area of a <strong>${type}</strong>
      with a ${
        measures.length > 1 ? measures.join(' and ') : measures
      }. Below is your result:`;
    },
    body: {
      inputType: 'result',
      option: [{ id: 1, value: 0, label: 'The Area is ' }],
    },
  },
};

export const selectionOptions = [
  { id: 1, value: Shapes.RECTANGLE, label: 'Rectangle' },
  { id: 2, value: Shapes.CIRCLE, label: 'Circle' },
  { id: 3, value: Shapes.SQUARE, label: 'Square' },
  { id: 4, value: Shapes.ELLIPSE, label: 'Ellipse' },
];

export const defaultPayload = {
  rectangle: { length: 0, breadth: 0 },
  circle: { diameter: 0 },
  square: { length: 0 },
  ellipse: { axisA: 0, axisB: 0 },
};

export const initialValue = {
  type: Shapes.RECTANGLE,
  payload: defaultPayload,
};
