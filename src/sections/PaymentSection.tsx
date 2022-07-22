import {
  Alert,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import ENODateField from "../components/ENODateField";
import ENOTextField from "../components/ENOTextField";
import { ReceptionInvoice } from "../models/InvoiceReception";

export interface PaymentSectionProps {
  register: UseFormRegister<ReceptionInvoice>;
  errors: FieldErrors<ReceptionInvoice>;
  control: any;
}

export default function PaymentSection({
  register,
  errors,
  control,
}: PaymentSectionProps) {
  return (
    <>
      <Grid container spacing={2}>
        <Grid container item xs={6} spacing={1}>
      
          <Grid item xs={12} md={5}>
            <ENOTextField<ReceptionInvoice>
              label="Bank"
              register={register}
              name={"bank"}
              options={{
                required: "This field is required",
              }}
              error={errors.bank}
            />
          </Grid>
          <Grid item xs={12} md={2}>
            <ENOTextField<ReceptionInvoice>
              label="Ledger"
              register={register}
              name={"ledger"}
              options={{
                required: "This field is required",
              }}
              error={errors.ledger}
            />
          </Grid>
          <Grid item xs={12} md={5}>
            <ENOTextField<ReceptionInvoice>
              label="Account"
              register={register}
              name={"account"}
              options={{
                required: "This field is required",
              }}
              error={errors.account}
            />
          </Grid>
          <Grid item xs={12} md={12}>
            <ENOTextField<ReceptionInvoice>
              label="Kennitala"
              register={register}
              name={"kennitala"}
              options={{
                required: "This field is required",
              }}
              error={errors.kennitala}
            />
          </Grid>
        </Grid>
        
        <Grid container item xs={6} spacing={1}>

          <Grid item xs={12} md={12}>
            <ENOTextField<ReceptionInvoice>
              label="Comments"
              register={register}
              name={"comments"}
              options={{
                required: "This field is required",
              }}
              id="outlined-multiline-static"
              multiline={true}
              rows={4}
              error={errors.comments}
            />
          </Grid>
        </Grid>

      </Grid>
      




      {/* <Grid item xs={6} md={3}>
        <FormControl fullWidth className="mb-3" style={{ width: "100%" }}>
          <InputLabel id="nameidlabel" variant="outlined"></InputLabel>
          <Select
            labelId="nameidlabel"
            {...register("buyerId", {
              required: true,
            })}
            defaultValue="-"
            name="nameid"
            id="nameid"
            variant="outlined"
          >
            <MenuItem value={"-"} disabled>
              Name (ID)
            </MenuItem>
            <MenuItem value={"10"}>Ten</MenuItem>
            <MenuItem value={"20"}>Twenty</MenuItem>
            <MenuItem value={"30"}>Thirty</MenuItem>
          </Select>
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
      </Grid> */}
    </>
  );
}
