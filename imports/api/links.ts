import { Mongo } from 'meteor/mongo';

type Link = {
  _id: string;
  title: string;
  url: string;
  createdAt: Date
};

export const LinksCollection = new Mongo.Collection<Link>('links');
