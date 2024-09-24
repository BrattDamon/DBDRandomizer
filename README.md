# Dead by Daylight Randomizer
Author: Bratt (https://twitch.tv/bratt)

Credit: Using a local and abridged version of the API available at https://dbd.tricky.lol/

# How to use:

1. Click on the green "Code" button at the right side of the repository.

2. Then select "Download Zip" from the selections available, then unzip and save the Project somewhere easily accessible on your PC (You will need to reference these files later)

![image](https://github.com/user-attachments/assets/c5239222-67d1-40a9-b1a0-a3e8107eee75)

3. Create a new Browser source in OBS on the scene you wish to have the randomizer on.

![image](https://github.com/user-attachments/assets/e3df6aea-7c6f-4ea5-9719-6c806e13f3fc)

4. In your new Browser Source **properties**, make sure to select **"Local File"**, as well as **"Shutdown source when not visible"** and ****Refresh browser when scene becomes active"**. This will ensure the randomizer will start anytime that scene is visible.

![image](https://github.com/user-attachments/assets/f0ae64ec-30f7-4403-8a24-a72c7f539c9c)
![image](https://github.com/user-attachments/assets/561e6f69-bce0-40d9-9bcb-e5f8a029fa2c)

5. While in these properties for your Browser Source, you will want to browse to where you downloaded the project on your PC, and select the file "**survivor.html**". Then click OK. This is a randomizer for survivors.

![image](https://github.com/user-attachments/assets/c320a66a-24ae-4d27-bdce-a81bc99cc058)

6. Setup a new Browser source, then repeat Steps 3-5 but instead of selecting survivor.html, select killer.html instead. This will be the randomizer for killers.

7. I kept both of these sources as basic and transparent as possible to ensure the scene can be used by as many streamers as possible. Enjoy!

# Troubleshooting:

- If you notice the scene is no longer randomizing. Try toggling the visibility of the source.

- If that doesn't work, open up the properties of the source and refresh the cache.

