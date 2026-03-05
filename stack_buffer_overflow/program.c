#include <stdlib.h>
#include <stdio.h>
#include <unistd.h>

#define NAME_SIZE 50

int win()
{
    const char *argv[] = {"/bin/bash", NULL};
    const char *envp[] = {NULL};
    execve("/bin/bash", argv, envp);
}

int main(int argc, char *argv[])
{
    setreuid(0, 0);
    char name[NAME_SIZE];

    printf("Quel est votre nom ?\n");

    scanf("%50s", name);

    printf("Bonjour %s\n", name);

    return EXIT_SUCCESS;
}
