import * as yup from 'yup';

const configSchema = yup.object({
  HOST: yup.string().required(),
});
export default async () => {
  const env = await configSchema.validate(process.env);
  return {
    host: env.HOST,
  };
};