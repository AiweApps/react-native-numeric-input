declare module 'react-native-numeric-input' {
  import React from "react";
  import { ViewStyle, TextInput } from 'react-native'
  import { Color } from 'csstype'

  export interface INumericInputProps {
    reference?: React.RefObject<TextInput>
    value?: number
    minValue?: number
    maxValue?: number
    step?: number
    valueType?: 'integer' | 'real'
    initValue?: number
    iconSize?: number
    borderColor?: Color
    iconStyle?: ViewStyle
    totalWidth?: number
    separatorWidth?: number
    type?: 'plus-minus' | 'up-down'
    rounded?: boolean
    textColor?: Color
    containerStyle?: ViewStyle
    inputStyle?: ViewStyle
    upDownButtonsBackgroundColor?: Color
    rightButtonBackgroundColor?: Color
    leftButtonBackgroundColor?: Color
    totalHeight?: number
    onChange: (value: number) => void
    onFocus?: () => void
    onBlur?: () => void
    onLimitReached?: (isMax: boolean, msg: string) => void
    editable?: boolean
    validateOnBlur?: boolean
    reachMaxIncIconStyle?: ViewStyle
    reachMaxDecIconStyle?: ViewStyle
    reachMinIncIconStyle?: ViewStyle
    reachMinDecIconStyle?: ViewStyle
    extraTextInputProps?: object
  }

  export default class NumericInput extends React.Component<
    INumericInputProps
  > {}

  export const DIMENTIONS: { height: number; width: number }
}
