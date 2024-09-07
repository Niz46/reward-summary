import styled from "styled-components";
import { Modal } from "../../../../components/modal";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup.js";
import { withdrawAccountSchema } from "./validation";
import SMSelectDropDown from "../../../../components/smSelect/selectDropdown";
import { currencyOptions } from "../../transactionHistory/components/data";
import { InputField } from "../../../../components/inputField";
import { DocumentUpload } from "../../../../components/documentUpload";
import { Button } from "../../../../components/button";
import { PopUp } from "../../../../components/popUp";
import { useState } from "react";
import { toast } from "react-toastify";
import ToastComponent from "../../../../components/toastComponent";
import { accountDetailsOptions } from "../../initiateTransaction/components/data";

const WithdrawModal = ({ isOpen, handleClose }) => {
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);

  const {
    control,
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(withdrawAccountSchema),
  });

  const onClose = () => {
    reset();
    handleClose();
  };

  const onSubmit = (data) => {
    toast.success(
      <ToastComponent
        title={"Withdraw recorded successfully"}
        message={
          "Your withdrawal transaction of N200,000 has been recorded successfully"
        }
      />
    );
    setIsConfirmOpen(false);
    onClose();
    console.log({ data });
  };

  return (
    <Modal
      closeHandler={onClose}
      isOpen={isOpen}
      headerText={`Withdrawal Record`}
      subText={`You can record your withdrawals below`}
    >
      <Container onSubmit={handleSubmit(() => setIsConfirmOpen(true))}>
        <InputWrapper>
          <SMSelectDropDown
            placeholder={"Select currency"}
            name="currency"
            label={"Currency"}
            control={control}
            options={currencyOptions}
            error={!!errors.currency}
            errorText={errors.currency && errors.currency.message}
          />
          <SMSelectDropDown
            placeholder={"Select account"}
            name="account"
            control={control}
            label={"Account"}
            options={accountDetailsOptions}
            error={!!errors.account}
            errorText={errors.account && errors.account.message}
          />
          <InputField
            label={`Amount`}
            register={register}
            name="amount"
            type="number"
            placeholder="Enter amount"
            error={!!errors.amount}
            errorText={errors.amount && errors.amount.message}
          />
          <InputField
            label={`Reason for withdrawal`}
            register={register}
            name="reason"
            inputType="textarea"
            placeholder="Enter reason"
            error={!!errors.reason}
            errorText={errors.reason && errors.reason.message}
          />
        </InputWrapper>
        <DocumentUpload
          control={control}
          name={"receipt"}
          errors={errors}
          label={`Upload Receipt (Optional)`}
          width={`98%`}
        />
        <BtnWrapper>
          <Button
            label={"Cancel"}
            buttonClass={"outline"}
            width={`48%`}
            type={"button"}
            onClick={onClose}
          />
          <Button
            label={"Continue"}
            buttonClass={"primary"}
            width={`48%`}
            type="submit"
          />
        </BtnWrapper>
      </Container>
      <PopUp
        open={isConfirmOpen}
        handleClose={() => setIsConfirmOpen(false)}
        onSubmit={handleSubmit(onSubmit)}
        title={"Confirm  Submission?"}
        subtitle={
          "Are you sure you want to proceed with submission of this receipt?"
        }
      />
    </Modal>
  );
};

export default WithdrawModal;

const Container = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
  height: 100%;
  margin-top: 20px;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 12px;
  gap: 8px;
  border-radius: 12px;
  background: #f9fafb;
`;

const BtnWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto 0 10px;
`;
