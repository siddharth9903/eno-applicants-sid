import {
  Alert,
  FormControl,
  Grid,
  InputLabel,
  TextField,
} from "@mui/material";
import React from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import ENODateField from "../components/ENODateField";
import ENODropdown from "../components/ENODropdown";
import ENOTextField from "../components/ENOTextField";
import { ReceptionInvoice } from "../models/InvoiceReception";

export interface BasicsSectionProps {
  register: UseFormRegister<ReceptionInvoice>;
  errors: FieldErrors<ReceptionInvoice>;
  control: any;
}

const menuItems = [
  { value: "10", field: "Ten" },
  { value: "20", field: "Twenty" },
  { value: "30", field: "Thirty" },
]

export default function BasicsSection({
  register,
  errors,
  control,
}: BasicsSectionProps) {
  return (
    <>
      <Grid item xs={6} md={3}>
        <ENOTextField<ReceptionInvoice>
          label="Invoice Number"
          register={register}
          name={"invoiceNumber"}
          options={{
            required: "This field is required",
          }}
          error={errors.invoiceNumber}
          tooltipText="The unique identifier of the invoice"
        />
      </Grid>
      <Grid item xs={6} md={3}>

        <FormControl fullWidth className="mb-3" style={{ width: "100%" }}>
          <InputLabel id="buyerId" variant="outlined">Buyer ID</InputLabel>
          <ENODropdown
            name="buyerId"
            label="Buyer Id"
            register={register}
            itemList={menuItems}
            options={{
              required: "This field is required",
            }}
            error={errors.buyerId}
          />
        </FormControl>
        {errors.buyerId && (
          <Alert severity="error">This Field Is Required.</Alert>
        )}
      </Grid>

      <Grid item xs={6} md={3}>
        <FormControl fullWidth className="mb-3" style={{ width: "100%" }}>
          <InputLabel id="invoiceDate" variant="outlined"></InputLabel>
          <ENODateField
            renderInput={(props) => <TextField {...props} />}
            control={control}
            label="Issue Date"
            {...register("invoiceDate", {
              required: true,
            })}
            error={errors.invoiceDate}
          />
        </FormControl>
        {errors.invoiceDate && (
          <Alert severity="error">This Field Is Required.</Alert>
        )}
      </Grid>

      <Grid item xs={6} md={3}>
        <FormControl fullWidth className="mb-3" style={{ width: "100%" }}>
          <InputLabel id="dueDate" variant="outlined"></InputLabel>
          <ENODateField
            renderInput={(props) => <TextField {...props} />}
            label="Due Date"
            control={control}
            {...register("dueDate", {
              required: true,
            })}
            error={errors.dueDate}
          />
        </FormControl>
        {errors.dueDate && (
          <Alert severity="error">This Field Is Required.</Alert>
        )}
      </Grid>
    </>
  );
}
