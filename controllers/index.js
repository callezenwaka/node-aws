const AWS = require('aws-sdk');
require('dotenv').config();
AWS.config.update({
  region: process.env.AWS_DEFAULT_REGION,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  endpoint: `http://${process.env.HOST}:${HOST_PORT}`,
});

const dynamoClient = new AWS.DynamoDB.DocumentClient();
const TABLE_NAME = process.env.TABLE_NAME;

exports.getAll = async (req, res, next) => {
  const params = {
    TableName: TABLE_NAME,
  };
  try {
    // TODO: Get all items from the database
    const items = await dynamoClient.scan(params).promise();
    if (!items) {
      return res.status(200).json([]);
    }
    return res.status(200).json(items);
	} catch (error) {
		return res.status(500).json('Internal Server Error!');
	}
};

exports.postOne = async (req, res, next) => {
  const params = {
    TableName: TABLE_NAME,
    Item: item,
  };
  try {
    // TODO: Post item to the database
    const item = await dynamoClient.put(params).promise();
    return res.status(200).json(item);
  } catch (error) {
    return res.status(500).json('Internal Server Error!');
  }
}

exports.updateOne = async (req, res, next) => {
  const params = {
    TableName: TABLE_NAME,
    Item: {
      id: req.params.id,
      ...req.body
    },
  };
  try {
    // TODO: Update item to the database
    const item = await dynamoClient.update(params).promise();
    return res.status(200).json(item);
  } catch (error) {
    return res.status(500).json('Internal Server Error!');
  }
}

exports.getOne = async (req, res, next) => {
  const params = {
    TableName: TABLE_NAME,
    Key: {
      id: req.params.id,
    },
  };
  try {
    // TODO: Get item from the database
    const item = await dynamoClient.get(params).promise();
    if (!item) {
      return res.status(200).json({});
    }
    return res.status(200).json(item);
  } catch (error) {
    return res.status(500).json('Internal Server Error!');
  }
}

exports.deleteOne = async (req, res, next) => {
  const params = {
    TableName: TABLE_NAME,
    Key: {
      id: req.params.id,
    },
  };
  try {
    // TODO: Delete item from the database
    const item = await dynamoClient.delete(params).promise();
    return res.status(200).json(item);
  } catch (error) {
    return res.status(500).json('Internal Server Error!');
  }
}