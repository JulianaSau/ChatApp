
const mongoose =  require("mongoose");

const chatModel = mongoose.Schema(
    {
        chatName:{ type: String, trim: true},
        isGroupChat: { type: Boolean, default: false },
        users: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User",
            }
        ],
        latestMessage: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Message",
        },
        groupAdmin: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
        isArchived: { type: Boolean, default: false },
        isPrivate: { type: Boolean, default: false },
        numberofUsers: { type: Number, default: 1 },
        dateCreated: { type: Date },
    },
    {
        timestamps: true,
    }
);

const Chat = mongoose.model("Chat", chatModel);

module.exports = Chat;

