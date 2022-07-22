import React, { useMemo } from "react";
import { FieldValues } from "react-hook-form";
import {ENOFieldProps } from "./EnoFieldUtils";
import ENOTooltip from "./ENOTooltip";
import { makeStyles } from "@mui/styles";
import { MenuItem, Select, SelectClassKey } from "@mui/material";

export interface ENOTextFieldProps<T extends FieldValues>
    extends ENOFieldProps<T> {
    itemList?: { value: string, field: string }[],
    label:string;
}

const useStyles = makeStyles({
    fullWidth: {
        width: "100%",
    },
});

export default function ENODropdown<T extends FieldValues>({
    name,
    register,
    options,
    error,
    tooltipText,
    label,
    itemList,
    ...rest
}: ENOTextFieldProps<T>) {
    return (
        <ENOTooltip text={tooltipText}>
            <Select
                label={label}
                {...register(name, options)}
                {...rest}
                defaultValue={"-"}
            >
                <MenuItem value={"-"} disabled>
                    Name (ID)
                </MenuItem>
                {
                    itemList?.map(item => (<MenuItem value={item.value}>{item.field}</MenuItem>))
                }
            </Select>
        </ENOTooltip>
    );
}