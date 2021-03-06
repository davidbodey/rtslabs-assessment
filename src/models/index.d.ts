import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type RTSlabsAssessmentMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PostMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CommentMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class RTSlabsAssessment {
  readonly id: string;
  readonly name: string;
  readonly posts?: (Post | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<RTSlabsAssessment, RTSlabsAssessmentMetaData>);
  static copyOf(source: RTSlabsAssessment, mutator: (draft: MutableModel<RTSlabsAssessment, RTSlabsAssessmentMetaData>) => MutableModel<RTSlabsAssessment, RTSlabsAssessmentMetaData> | void): RTSlabsAssessment;
}

export declare class Post {
  readonly id: string;
  readonly title: string;
  readonly blogID: string;
  readonly comments?: (Comment | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Post, PostMetaData>);
  static copyOf(source: Post, mutator: (draft: MutableModel<Post, PostMetaData>) => MutableModel<Post, PostMetaData> | void): Post;
}

export declare class Comment {
  readonly id: string;
  readonly postID: string;
  readonly content: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Comment, CommentMetaData>);
  static copyOf(source: Comment, mutator: (draft: MutableModel<Comment, CommentMetaData>) => MutableModel<Comment, CommentMetaData> | void): Comment;
}