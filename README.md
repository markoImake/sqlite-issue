# sqlite-issue

## Example app buttons

The example app has 2 buttons:

- **Create new database instance with multithreading disabled**
- **Create new database instance with multithreading enabled**

## Issue with platforms/ios@8.5.0

The example app uses `platforms/ios@8.5.0`, which is where the issue started. If you change the version to `platforms/ios@8.4.1`, it works as expected with no issues.

## Error description

When you create a database instance with multithreading enabled, it crashes the app with the following error:

`FATAL ERROR: HandleScope::HandleScope Entering the V8 API without proper locking in place`