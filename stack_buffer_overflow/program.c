#include <stdlib.h>
#include <stdio.h>

#define NAME_SIZE 50

int win()
{
    const char *argv[] = {"/bin/bash", "-i", NULL};
    const char *envp[] = {NULL};
    execve("/bin/bash", argv, envp);
}

int main(int argc, char *argv[])
{
    char name[NAME_SIZE];

    printf("Quel est votre nom ?\n");

    scanf("%s", name);

    printf("Bonjour %s\n", name);

    return EXIT_SUCCESS;
}
