# chatApp

## User Stories
- Users should be able to send messages in public rooms.
- Users should be able to send and receive private messages
- Users should be able to see who's online
- Users should see a message when other users connect or disconnect.
- Users should see “{user} is typing” while other users are typing.
- Users should be able to give themselves a nickname.
    - There should be some way to validate and make sure the nickname isn't taken.
    - There should be an authentication system.
    - The user's private messages and groups should be persistent across sessions.
- Users shouldn't receive their own messages
    - Instead, when a user sends a message, it should emit the message to other connected clients.
