function Start () {
    try {
        // Create an instance of StreamReader to read from a file.
        sr = new StreamReader("TestFile.txt");
        // Read and display lines from the file until the end of the file is reached.
        line = sr.ReadLine();
        while (line != null) {
            print(line);
            line = sr.ReadLine();
        }
        sr.Close();
    }
    catch (e) {
        // Let the user know what went wrong.
        print("The file could not be read:");
        print(e.Message);
    }
}

readTextFile("file://TestFile.txt");