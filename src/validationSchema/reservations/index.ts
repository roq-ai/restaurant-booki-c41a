import * as yup from 'yup';

export const reservationValidationSchema = yup.object().shape({
  table_number: yup.number().integer().required(),
  reservation_time: yup.date().required(),
  user_id: yup.string().nullable(),
  organization_id: yup.string().nullable(),
});
