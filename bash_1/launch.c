#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>

int main(int argc, char *argv[])
{
    setreuid(0, 0);
    argv[0] = "/root/script.sh";
    execve("/root/script.sh", argv, NULL);

    return EXIT_SUCCESS;
}
