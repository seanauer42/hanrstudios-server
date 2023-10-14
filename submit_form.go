package main

import (
	"fmt"
	"os"
	"time"
)

func writeFile(s string) {
	timeString := time.Now().Format("2006-01-02-15:04:05;00")
	fileName := "submitted" + timeString + ".txt"
	file, err := os.Create(fileName)
	if err != nil {
		fmt.Printf("Unable to open %s: %s", fileName, err)
	}

	//hello := "test string to write in the file"
	len, err := file.WriteString(s)
	if err != nil {
		fmt.Printf("Unable to write data: %s", err)
	}

	file.Close()

	fmt.Printf("%d characters written to %s: '%s'", len, fileName, s)
}

func main() {
	formString := "This was submitted in a form"
	writeFile(formString)

}
