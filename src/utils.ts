import { RefObject } from "react";
import Konva from "konva";

export const onSelectShape = (
    elRef: RefObject<Konva.Rect | Konva.Circle | Konva.Text>,
    trRef: RefObject<Konva.Transformer>
): void => {
    if (elRef.current) {
        trRef.current?.nodes([elRef.current]);
    }
};
