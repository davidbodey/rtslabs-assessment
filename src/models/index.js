// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { RTSlabsAssessment, Post, Comment } = initSchema(schema);

export {
  RTSlabsAssessment,
  Post,
  Comment
};