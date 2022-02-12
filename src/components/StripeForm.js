import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  useStripe,
  useElements,
  CardCvcElement,
  CardExpiryElement,
  CardNumberElement,
} from "@stripe/react-stripe-js";
import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import {
  StripeTextFieldCVC,
  StripeTextFieldExpiry,
  StripeTextFieldNumber,
} from "../components/CommonTextField";
import { getOrder, putOrder } from "../services/stripe.service.js";
import { resetCartOnLogOut } from "../redux/reducers/productsReducer";

const FormPayment = () => {
  const [order, setOrder] = useState({});
  const [loading, setLoading] = useState(true);
  const [submitLoading, setSubmitLoading] = useState(false);
  const activeUser = useSelector((state) => state.auth.user.name);
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //TODO: order de la base de datos
  useEffect(() => {
    setLoading(true);
    const id = localStorage.getItem("uid");
    const getData = async () => {
      const resp = await getOrder(id);
      setOrder(resp.resp.data);
      setLoading(false);
    };
    getData();
  }, []);

  // TODO: submit del formulario, Crear metodo de pago
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitLoading(true);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(
        CardCvcElement,
        CardExpiryElement,
        CardNumberElement
      ),
    });

    if (!error) {
      const id = localStorage.getItem("uid");
      const crearPago = await putOrder(
        "/order",
        { token: paymentMethod.id },

        id
      );
      stripe
        .confirmCardPayment(crearPago.resp.data.client_secret)
        .then(async () => {
          const id = localStorage.getItem("uid");
          const resp = await putOrder("/order/confirm", null, id);
          console.log("dinerito, dinerito");
          dispatch(resetCartOnLogOut());
          navigate("/checkout/success");
        })
        .catch();
    } else {
      console.log(error);
    }
  };

  const [state, setState] = React.useState({
    cardNumberComplete: false,
    expiredComplete: false,
    cvcComplete: false,
    cardNumberError: null,
    expiredError: null,
    cvcError: null,
  });

  const onElementChange =
    (field, errorField) =>
    ({ complete, error = { message: null } }) => {
      setState({ ...state, [field]: complete, [errorField]: error.message });
    };

  const { cardNumberError, expiredError, cvcError } = state;

  if (loading) {
    return <div>generando formulario de pago...</div>;
  }

  return (
    <Container
      maxWidth="md"
      sx={{
        display: "flex",
        justifyContent: "center",
        boxShadow: 1,
        borderRadius: 2,
        width: "40%",
      }}
    >
      <Box
        sx={{
          md: { padding: 1 },
          width: { md: "80%", xs: "100%" },
          marginTop: 5,
        }}
      >
        <Typography variant="h3" align="center" fontFamily="Lato">
          Hola {activeUser}
        </Typography>
        <Typography variant="h6" align="center" fontFamily="Lato">
          📌 A continuación debes de introducir los datos de tu tarjeta para
          procesar el pago! El pago se procesara mediante la plataforma de
          stripe
        </Typography>
        <Box mt={3} />
        <Box component="form" onSubmit={handleSubmit} mb={4}>
          <TextField
            fullWidth
            id="name"
            name="name"
            label="name"
            autoComplete="off"
            value={activeUser}
            InputProps={{
              readOnly: true,
            }}
          />
          <Box mt={4} />
          <TextField
            fullWidth
            id="amount"
            name="amount"
            label="amount"
            autoComplete="off"
            value={order.amount}
            InputProps={{
              readOnly: true,
            }}
          />
          <Box mt={4} />
          <StripeTextFieldNumber
            stripeElement={CardNumberElement}
            error={Boolean(cardNumberError)}
            fullWidth
            required
            labelErrorMessage={cardNumberError}
            onChange={onElementChange("cardNumberComplete", "cardNumberError")}
          />
          <Box mt={4} />
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <StripeTextFieldExpiry
                stripeElement={CardExpiryElement}
                error={Boolean(expiredError)}
                required
                labelErrorMessage={expiredError}
                onChange={onElementChange("expiredComplete", "expiredError")}
              />
            </Grid>
            <Grid item xs={6}>
              <StripeTextFieldCVC
                stripeElement={CardCvcElement}
                error={Boolean(cvcError)}
                required
                labelErrorMessage={cvcError}
                onChange={onElementChange("cvcComplete", "cvcError")}
              />
            </Grid>
          </Grid>
          <Box mt={6.5} pt={6.5} />
          <Button
            variant="contained"
            fullWidth
            type="submit"
            sx={{
              backgroundColor: "#FB2E86",
              "&:hover": {
                backgroundColor: "#FB2E86",
              },
            }}
          >
            {submitLoading ? "Aguarde un momento..." : "Pagar"}
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default FormPayment;
